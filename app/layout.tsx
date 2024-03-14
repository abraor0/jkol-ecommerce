import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "JKol Ecommerce",
  description: "Ecommerce sneaker shop",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-96"}>
        <Nav />
        <div className="relative">
          <div id="mobile-nav-portal"></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
