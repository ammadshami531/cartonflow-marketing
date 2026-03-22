import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CartonFlow — Your freight, fully under control",
  description: "Connect your brand with 3PLs, forwarders, and distributors. Real-time tracking, RFQ bidding, invoice portal, and carton-level visibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-sans ${inter.className}`}>{children}</body>
    </html>
  );
}
