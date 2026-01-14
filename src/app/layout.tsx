import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zespół na Event Firmowy | Premium Live Band | Gale, Integracje, Afterparty",
  description: "Profesjonalny zespół live na eventy B2B. Pełna obsługa techniczna, faktura VAT, repertuar PL/EN. Sprawdź dostępność terminu.",
  keywords: ["zespół na event", "live band", "muzyka na gale", "zespół na integrację", "afterparty", "event firmowy", "zespół premium"],
  authors: [{ name: "Premium Live Band" }],
  openGraph: {
    title: "Zespół na Event Firmowy | Premium Live Band",
    description: "Profesjonalny zespół live na eventy B2B. Pełna obsługa techniczna, faktura VAT. Sprawdź dostępność terminu.",
    type: "website",
    locale: "pl_PL",
    siteName: "Premium Live Band",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zespół na Event Firmowy | Premium Live Band",
    description: "Profesjonalny zespół live na eventy B2B. Sprawdź dostępność terminu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0f0f1a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
