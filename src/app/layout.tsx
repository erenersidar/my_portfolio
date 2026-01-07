import type { Metadata } from "next";
import { Source_Code_Pro } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DotShaderAnimation from "@/components/dot-shader-animation";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apply10.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sidar Erener | Full-Stack Developer",
    template: "%s | Sidar Erener",
  },
  description:
    "Full-Stack Developer specializing in Flutter, React, Next.js und moderne Web-/App-Entwicklung. Verfügbar für Projekte in Deutschland.",
  keywords: [
    "Full-Stack Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "Mobile App Development",
    "Web Development",
    "Software Engineer",
    "Germany",
    "Mülheim an der Ruhr",
  ],
  authors: [{ name: "Sidar Erener" }],
  creator: "Sidar Erener",
  openGraph: {
    title: "Sidar Erener | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Flutter, React, Next.js und moderne Web-/App-Entwicklung.",
    url: siteUrl,
    siteName: "Sidar Erener Portfolio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidar Erener | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Flutter, React, Next.js und moderne Web-/App-Entwicklung.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification (add your code when available)
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${sourceCodePro.variable}`}>
      <head />
      <body className="font-body antialiased">
          <DotShaderAnimation />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
