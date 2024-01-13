import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Splash } from "@/components/splash";
import { Toolbar } from "@/components/toolbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LO9UD's Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " h-screen w-screen flex flex-col justify-start"
        }
      >
        <Splash />
        <Toolbar />
        <main className="flex flex-grow flex-row flex-wrap justify-center content-stretch px-2 py-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
