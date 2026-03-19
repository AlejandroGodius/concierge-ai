import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Concierge — Free WhatsApp Concierge for Hotels & Villas",
  description:
    "Give your guests a 24/7 AI concierge on WhatsApp. They book tours & experiences, you earn commission. Free forever, setup in 5 minutes.",
  openGraph: {
    title: "AI Concierge — Free WhatsApp Concierge for Hotels & Villas",
    description:
      "Give your guests a 24/7 AI concierge on WhatsApp. They book tours & experiences, you earn commission. Free forever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050510] text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
