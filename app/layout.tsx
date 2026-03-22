import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartonFlow — Your freight, fully under control",
  description: "The logistics platform that connects Amazon sellers and e-commerce brands with their 3PLs, forwarders, and distributors — in one place, in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
