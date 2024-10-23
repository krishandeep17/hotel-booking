import type { Metadata } from "next";

import "@/_styles/globals.css";
import Navigation from "@/_components/Navigation";

export const metadata: Metadata = {
  title: "Timber Nest",
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Timber Nest</footer>
      </body>
    </html>
  );
}
