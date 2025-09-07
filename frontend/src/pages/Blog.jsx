import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { TopOfTheDaySection } from "../components/TopOfTheDaySection/TopOfTheDaySection";
import { InterestingSection } from "../components/InterestingSection/InterestingSection";
import { Footer } from "../components/Footer/Footer";



function Blog() {  
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TopOfTheDaySection />
        <InterestingSection />
      </main>
      <Footer />
    </>
  );
}

export default Blog;
