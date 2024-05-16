/* eslint-disable @next/next/no-page-custom-font */
import { Providers } from "./provider"
import "./globals.css";
import './properties.css'
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: 'Neutron Robotics',
  description: 'Connect and Manage your robots in the simpliest way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body >
        <Providers>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-LNBMJM7K5Q" />
    </html>
  )
}
