/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import './properties.css'
import { Providers } from "./provider";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head, Html } from "next/document";

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
      </Head>
      <body >
        <Providers>
          {children}
        </Providers>
      </body>
    </Html>
  );
}
