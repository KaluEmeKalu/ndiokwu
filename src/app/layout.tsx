import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import { NdiokwuText } from '../components/NdiokwuText';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ndịokwu - The Efficient Igbo Abugida Writing System",
  description: "Learn the most efficient writing system for the Igbo language, mastery in under 30 minutes",
  keywords: ["Ndịokwu", "Igbo", "language", "abugida", "writing system", "African languages"],
  icons: {
    icon: [
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { url: '/images/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
