import { categories } from "../data";

export function getFilterAndGroupedArticles(articles, query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);

  const filtered = articles.filter((article) => {
    return words.every((word) => article.title.toLowerCase().includes(word));
  });

  return categories.map((category) => ({
    ...category,
    articles: filtered.filter((article) => article.category === category.id),
  })).filter((group) => group.articles.length > 0);
}
