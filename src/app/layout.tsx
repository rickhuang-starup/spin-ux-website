import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spin UX — User Experience Design Studio",
  description:
    "Spin UX is a design studio specializing in user experience, interface design, and digital product strategy. We craft intuitive, beautiful digital experiences.",
  keywords: ["UX design", "UI design", "user experience", "digital product design", "design studio"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Spin UX — User Experience Design Studio",
    description:
      "We craft intuitive, beautiful digital experiences that drive results.",
    url: "https://www.spin-ux.com",
    siteName: "Spin UX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
