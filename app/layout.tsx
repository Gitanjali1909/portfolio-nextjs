import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./component/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Intro",
  description: "A personal introduction page with mood toggle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
        <Navbar /> 
        <main className="pt-14">{children}</main> 
      </body>
    </html>
  );
}
