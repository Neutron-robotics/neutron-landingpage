/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import './properties.css'
import { Providers } from "./provider";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head, Html } from "next/document";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neutron Robotics",
  description: "Control and manage your system efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" /> */}
      </Head>
      <body >
        <Providers>
          {children}
        </Providers>
      </body>
    </Html>
  );
}
