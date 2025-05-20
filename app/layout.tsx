import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import { Roboto } from "next/font/google";
import { FavoritesProvider } from "@/app/context/FavoritesContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "VestFut",
  description: "Compre a camisa do seu time favorito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <FavoritesProvider>
          <Header></Header>
          <main className="flex-grow">{children}</main>
          <Footer></Footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
