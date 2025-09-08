import { Fragment } from "react/jsx-runtime";

import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ArticleSection } from "../components/ArticleSection/ArticleSection";
import { Footer } from "../components/Footer/Footer";

import { useFilteredArticles, useGetTemperature } from "../hooks";

import { getSizeByCategory } from "../utils";

function Blog() {
  const temperatureData = useGetTemperature();
  const { search, handleSearch, filteredArticles } = useFilteredArticles();

  return (
    <Fragment>
      <Header />
      <main>
        <HeroSection
          temperatureData={temperatureData}
          handleSearch={handleSearch}
        />
        {filteredArticles.length > 0 ? (
          filteredArticles.map((group) => (
            <ArticleSection
              key={group.id}
              category={group.title}
              articles={group.articles}
              size={getSizeByCategory(group.category)}
              search={search}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No articles found
          </p>
        )}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Blog;
