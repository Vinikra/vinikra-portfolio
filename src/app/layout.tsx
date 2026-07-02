import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      className={`${inter.variable} ${montserrat.variable} h-full antialiased bg-surface text-foreground`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
