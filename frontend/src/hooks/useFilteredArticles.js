import { useState, useEffect } from "react";

import { getFilterAndGroupedArticles, getSizeByCategory } from "../utils";

import { articles } from "../data";

export function useFilteredArticles(ini) {
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(
    getFilterAndGroupedArticles(articles, search)
  );

  const handleSearch = (query) => {
    setSearch(query);
  };
  
  useEffect(() => {
    const filtered = getFilterAndGroupedArticles(articles, search);
    setFilteredArticles(filtered);
  }, [search]);
  
  return { search, handleSearch, filteredArticles };
}