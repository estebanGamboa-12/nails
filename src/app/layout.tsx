import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Parisienne } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const parisienne = Parisienne({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata: Metadata = {
  title: "Nails & Braids",
  description: "Peluquería, estética y uñas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} ${parisienne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
