import type { Metadata } from "next";
import "./globals.css";

import { Roboto_Condensed } from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
const roboto: NextFont = Roboto_Condensed({ subsets: ['latin'] });


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
