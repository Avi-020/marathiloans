import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { LanguageProvider } from "./Context/LanguageContext";
import Footer from "./Components/Footer";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <Navbar {...pageProps} />
        <HeroSection />
        <Footer />
      </LanguageProvider>
    </>
  );
}
