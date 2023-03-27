import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import QueryProvider from "@/components/QueryProvider";
import FaviconLinks from "@/components/FaviconLinks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/css/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - Metflix",
  description: "Generated by create next app",
  manifest: "/assets/favicon/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <FaviconLinks />
      </head>

      <body
        className={`bg-black text-slate-100 antialiased ${openSans.className} overflow-x-hidden`}
      >
        <Navbar />

        <QueryProvider>
          <main className="px-3 md:px-4 lg:px-6 2xl:px-8">{children}</main>
        </QueryProvider>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}