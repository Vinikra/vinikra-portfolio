import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinikra.com"),
  title: "Vinícius Krasnievicz | Sites de alta conversão para negócios locais",
  description: "Transformo sites em máquinas de conversão: performance Google Lighthouse 98+, SEO local e design exclusivo, sem templates. Solicite um orçamento.",
  openGraph: {
    title: "Vinikra — Sites de alta conversão",
    description: "Performance Google Lighthouse 98+, SEO local e design exclusivo para negócios locais.",
    url: "https://vinikra.com",
    siteName: "Vinikra",
    locale: "pt_BR",
    type: "website",
  },
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
