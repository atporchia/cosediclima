import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoseDiClima | Il clima non è un'opinione",
  description:
    "Riconosci e smonta bufale climatiche, negazionismo e disinformazione con risposte brevi, dati solidi e fonti affidabili. Fai un Clima Check prima di condividere.",
  openGraph: {
    title: "CoseDiClima — Il clima non è un'opinione",
    description:
      "Controlla una frase sul clima prima di condividerla. Scopri se è falsa, fuorviante o manipolatoria.",
    locale: "it_IT",
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
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
