import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { LanguageProvider } from "./Context/LanguageContext";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <HeroSection />
        <Footer />
      </LanguageProvider>
    </>
  );
}
