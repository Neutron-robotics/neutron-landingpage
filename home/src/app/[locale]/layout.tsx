/* eslint-disable @next/next/no-page-custom-font */
import { Providers } from "./provider"
import "../globals.css";
import '../properties.css'
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
} from "next-intl/server";

export const metadata = {
  title: 'Neutron Robotics',
  description: 'Connect and Manage your robots in the simpliest way',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-LNBMJM7K5Q" />
    </html >
  )
}

const locales = ["en", "fr"];

function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}
