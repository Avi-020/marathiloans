import HeroSection from "./Components/HeroSection";
import { LanguageProvider } from "./Context/LanguageContext";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <HeroSection />
      </LanguageProvider>
    </>
  );
}
