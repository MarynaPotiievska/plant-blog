import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ArticleSection } from "../components/ArticleSection/ArticleSection";
import { Footer } from "../components/Footer/Footer";

import { useGetTemperature } from "../hooks/useGetTemperature";

import { groupByCategory, getSizeByCategory } from "../utils";

function Blog() {
  const temperatureData = useGetTemperature();
  const articles = groupByCategory();

  return (
    <>
      <Header />
      <main>
        <HeroSection {...temperatureData} />
        {articles.map((group) => (
          <ArticleSection
            key={group.id}
            category={group.title}
            articles={group.articles}
            size={getSizeByCategory(group.category)}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Blog;
