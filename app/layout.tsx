import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: `${siteContent.profile.name} | Data Analyst Portfolio`,
  description: siteContent.profile.shortBio,
  applicationName: `${siteContent.profile.name} Portfolio`,
  keywords: [
    "data analyst portfolio",
    "data scientist portfolio",
    "analytics projects",
    "machine learning portfolio",
  ],
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
