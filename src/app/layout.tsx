import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";
import { BackToTop } from "@/components/common/BackToTop";

const plexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TruMinds Clinical | Leading Global CRO & eClinical Solutions",
  description:
    "End-to-end full-service Contract Research Organization (CRO) and AI-powered TruForm eClinical Suite accelerating clinical trials globally.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plexSans.variable} h-full antialiased scroll-smooth scroll-pt-28`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <ContactSection />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
