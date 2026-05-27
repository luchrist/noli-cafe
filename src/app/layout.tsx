import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollCart from "@/components/ScrollCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Noli Café Kornwestheim | Fresh Coffee to Go",
  description:
    "Noli Café in der Ebertstraße 38 Kornwestheim. Der kleine orange Kaffeewagen unter dem Magnolienbaum: Specialty Coffee, Matcha, Iced Drinks und Croissants von Bäckerei Dannemann.",
  keywords: [
    "Noli Café",
    "Café Kornwestheim",
    "Coffee to go Kornwestheim",
    "Specialty Coffee Kornwestheim",
    "Ebertstraße 38",
    "Matcha Latte",
    "Hafer Cappuccino",
  ],
  openGraph: {
    title: "Noli Café Kornwestheim",
    description:
      "Kleiner orange Kaffeewagen unter dem Magnolienbaum. Specialty Coffee, Matcha und Iced Drinks in Kornwestheim.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollCart />
      </body>
    </html>
  );
}
