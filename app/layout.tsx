import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { hanken_grotesk } from "@/components/fonts";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Tigray Poultry Expo",
  description: "Tigray Poultry Expo 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hanken_grotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
