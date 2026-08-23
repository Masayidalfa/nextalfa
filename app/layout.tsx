import type { Metadata } from "next";
import { Sora, Shantell_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell",
});

export const metadata: Metadata = {
  title: "NextAlfa",
  description: "Development × Network × Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${shantellSans.variable}`}
    >
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}