import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - Zayna online store",
    default: "Zayna",
  },
  description: "Zayna online store is a leading e-commerce platform that offers a wide range of products, including health, pharmacy, home goods, and more. With a user-friendly interface and secure payment options, Zayna provides a seamless shopping experience for customers worldwide. Discover the latest trends and enjoy fast shipping with Zayna online store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
