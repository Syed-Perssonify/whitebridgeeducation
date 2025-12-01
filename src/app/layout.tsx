import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import "swiper/css";
import Header from "@/common/element/layout/header";
import Footer from "@/common/element/layout/footer";
import BackToTop from "@/common/element/layout/back-to-top";
import ClientInit from "@/common/element/layout/client-init";

const firaSans = Fira_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "White Bridge Education Website",
  description: "White Bridge Education website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} antialiased`}>
        <ClientInit />
        <Header />
        <main className="relative z-0">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
