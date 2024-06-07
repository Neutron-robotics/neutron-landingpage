'use client'

import Header from "@/src/components/Header";
import ContactPage from "@/src/components/Home/ContactPage";
import Footer from "@/src/components/Home/Footer";
import Homepage from "@/src/components/Home/Homepage";
import InnovationPage from "@/src/components/Home/InnovationPage";
import Mission from "@/src/components/Home/Mission";
import { useRef } from "react";

const Home: React.FC = () => {
  const homeRef = useRef<HTMLElement>(null);

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
};

export default Home;
