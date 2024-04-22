import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scrivo",
  description: "An articles to book management stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
