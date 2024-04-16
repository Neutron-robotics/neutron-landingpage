'use client'

import Header from "@/components/Header";
import ContactPage from "@/components/Home/ContactPage";
import Footer from "@/components/Home/Footer";
import Homepage from "@/components/Home/Homepage";
import InnovationPage from "@/components/Home/InnovationPage";
import Mission from "@/components/Home/Mission";
import VideoPage from "@/components/Home/VideoPage";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLElement>()

  return (
    <>
      <Header homeRef={homeRef as any} />
      <Homepage homeRef={homeRef as any} />
      <Mission />
      <InnovationPage />
      <VideoPage />
      <ContactPage />
      <Footer />
    </>
  );
}

