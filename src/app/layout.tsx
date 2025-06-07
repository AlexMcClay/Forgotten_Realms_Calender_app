import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forgotten Realms Calendar",
  description:
    "A Next.js application for tracking dates in the Forgotten Realms D&D setting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
