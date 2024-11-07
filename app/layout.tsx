import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GhostLayer",
  description: "Start now and learn about GhostLayer",
  keywords: ["GhostLayer", "Privacy", "Anonymity", "Security"],
  applicationName: "GhostLayer",
  generator: "Next.js",
  creator: "hugoqdesh",
  // robots: "index, follow",
  openGraph: {
    title: "GhostLayer",
    description: "Start now and learn about GhostLayer",
    locale: "en_US",
    url: "https://",
    siteName: "GhostLayer",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
