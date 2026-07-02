import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Vinícius Krasnievicz | Premium Web Development",
  description: "Desenvolvedor Web — Crio sites de alta conversão e estética premium para negócios locais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased bg-ink text-accent`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
