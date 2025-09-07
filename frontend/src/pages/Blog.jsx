import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { TopOfTheDaySection } from "../components/TopOfTheDaySection/TopOfTheDaySection";
import { InterestingSection } from "../components/InterestingSection/InterestingSection";
import { Footer } from "../components/Footer/Footer";

import { useGetTemperature } from "../hooks/useGetTemperature";

function Blog() {
  const temperatureData = useGetTemperature();

  return (
    <>
      <Header />
      <main>
        <HeroSection {...temperatureData} />
        <TopOfTheDaySection />
        <InterestingSection />
      </main>
      <Footer />
    </>
  );
}

export default Blog;
