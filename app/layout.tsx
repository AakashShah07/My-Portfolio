import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono } from "next/font/google";
import AnimatedCursor from "@/components/AnimatedCursor";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Aakash Shah — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React.js, Next.js, Spring Boot, and Node.js. Building scalable web applications with REST APIs and AWS cloud services.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmMono.variable} font-mono antialiased`}
      >
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
