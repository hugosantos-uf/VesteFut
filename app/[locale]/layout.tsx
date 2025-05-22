// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "../globals.css"; //
import Footer from "@/app/components/organisms/Footer"; //
import Header from "@/app/components/organisms/Header"; //
import { Roboto } from "next/font/google";
import { FavoritesProvider } from "@/app/context/FavoritesContext"; //
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing"; //
import ThemeRegistry from "../ThemeRegistry"; // Importe o ThemeRegistry

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "VestFut",
  description: "Compre a camisa do seu time favorito",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    //
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <ThemeRegistry>
          <NextIntlClientProvider>
            <FavoritesProvider>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </FavoritesProvider>
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
