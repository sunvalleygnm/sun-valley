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
  description: "Sun Valley GNM School of Nursing - Recognized by Indian Nursing Council and Govt. of Assam, and approved by Assam Nurses' Midwives' Council. Located above Sun Valley Hospital, GS Rd, Mathura Nagar, Bormotoria, Guwahati.",
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
