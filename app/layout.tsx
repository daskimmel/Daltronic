import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Roboto_Condensed } from 'next/font/google';
export const roboto = Roboto_Condensed({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Daltronic LLC",
  description: "Daltronic LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
