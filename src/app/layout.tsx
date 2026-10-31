import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eka Nur Andini Fitriyani — Portfolio",
  description:
    "Portfolio Eka Nur Andini Fitriyani — SIJA XII-A SMK Negeri 1 Cimahi. IoT Developer, UI/UX Designer, Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
