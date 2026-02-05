import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Execution Edge - Elite Web Development & Digital Solutions",
  description: "Transform your business with elite web development services. Crafting exceptional digital experiences, high-performance websites, and custom e-commerce platforms that drive measurable results.",
  keywords: ["Execution Edge", "Web Development", "Custom Websites", "E-commerce", "Frontend", "Next.js", "React", "TypeScript", "Digital Solutions"],
  authors: [{ name: "Execution Edge" }],
  openGraph: {
    title: "Execution Edge - Elite Web Development & Digital Solutions",
    description: "Crafting exceptional digital experiences that transform businesses with cutting-edge technology and stunning design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Execution Edge - Elite Web Developer",
    description: "Elite web development services that transform your vision into powerful digital experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
