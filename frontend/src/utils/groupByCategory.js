import { articles, categories } from "../data";

export function groupByCategory() {  
  return categories.map(category => ({
    ...category,
    articles: articles.filter(article => article.category === category.id),
  }));
}
