import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://guscornejo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gustavo Cornejo",
    template: "%s | Gustavo Cornejo",
  },
  description:
    "Full-Stack Software Engineer specializing in React, TypeScript, ASP.NET, and Azure. Portfolio of Gustavo Cornejo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Gustavo Cornejo",
    title: "Gustavo Cornejo",
    description:
      "Full-Stack Software Engineer specializing in React, TypeScript, ASP.NET, and Azure.",
    images: [
      {
        url: "/gus.jpeg",
        width: 1200,
        height: 630,
        alt: "Gustavo Cornejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Cornejo",
    description:
      "Full-Stack Software Engineer specializing in React, TypeScript, ASP.NET, and Azure.",
    images: ["/gus.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
