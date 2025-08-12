import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sun Valley GNM School of Nursing | Premier Nursing Education in Assam",
  description: "Sun Valley GNM School of Nursing - Approved by Assam Nurses' Midwives' Council & Recognized by Govt. of Assam. Established 2021. Quality nursing education in Guwahati.",
  keywords: "nursing school, GNM, Assam, Guwahati, nursing education, healthcare, medical training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
