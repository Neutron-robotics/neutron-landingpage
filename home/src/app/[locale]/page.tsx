'use client'

import Header from "@/src/components/Header";
import ContactPage from "@/src/components/Home/ContactPage";
import Footer from "@/src/components/Home/Footer";
import Homepage from "@/src/components/Home/Homepage";
import InnovationPage from "@/src/components/Home/InnovationPage";
import Mission from "@/src/components/Home/Mission";
import VideoPage from "@/src/components/Home/VideoPage";
import { AppProps } from "next/app";
import { useRef } from "react";

export default function Home({ Component, pageProps }: AppProps) {
  const homeRef = useRef<HTMLElement>()

  return (
    <>
      <Header homeRef={homeRef as any} />
      <Homepage homeRef={homeRef as any} />
      <Mission />
      <InnovationPage />
      {/* <VideoPage /> */}
      <ContactPage />
      <Footer />
    </>
  );
}

