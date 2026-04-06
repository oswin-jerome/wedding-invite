import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import previewImage from "@/assets/us2.png";

const playfair = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sourceSans = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oswin & Daphney | Holy Matrimony Invitation",
  description:
    "Invitation to the holy matrimony of Oswin Jerome A and Daphney on 11th May 2026.",
  openGraph: {
    title: "Oswin & Daphney | Holy Matrimony Invitation",
    description:
      "Invitation to the holy matrimony of Oswin Jerome A and Daphney on 11th May 2026.",
    images: [
      {
        url: previewImage.src,
        width: 1200,
        height: 630,
        alt: "Oswin & Daphney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oswin & Daphney | Holy Matrimony Invitation",
    description:
      "Invitation to the holy matrimony of Oswin Jerome A and Daphney on 11th May 2026.",
    images: [previewImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdf9f3]">
        {children}
      </body>
    </html>
  );
}
