// app/ThemeRegistry.tsx
"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

// Esta implementação é baseada na documentação oficial do MUI
// para integração com o App Router do Next.js.
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache({ key: "mui" });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  // Você pode customizar seu tema aqui se desejar
  const theme = createTheme({
    palette: {
      // Exemplo: usar a cor primária verde do seu projeto
      // primary: {
      //   main: '#15803d', // Cor similar ao green-700 do Tailwind
      // },
      // Adicione outras customizações de tema aqui
    },
    // Você pode definir breakpoints, tipografia, etc.
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normaliza estilos e aplica resets básicos */}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
