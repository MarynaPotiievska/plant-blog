import { Fragment } from "react";

import styles from "./ArticleSection.module.css";

import newBadge from "../../assets/images/new_badge.png";

import { ArticleCard } from "../ArticleCard/ArticleCard";
import { CtaCard } from "../CtaCard/CtaCard";

import { generateRows } from "../../utils";

function renderArticlesRow(articles, size) {
  return (
    <ul className={styles.list}>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard card={article} size={size === "middle" ? null : size} />
        </li>
      ))}
    </ul>
  );
}

export function ArticleSection({ category, articles, size }) {
  const isNewCategory = category === "New";
  const isInterestingCategory = category === "Interesting";
  if (isInterestingCategory) {
    console.log(generateRows(articles, 4));
  }
  const rowsToRender = isInterestingCategory
    ? generateRows(articles, 4)
    : [articles];

  return (
    <section className={`${styles.section} ${styles[size]}`}>
      <div className="container">
        {!isNewCategory && <hr className={styles.divider} />}
        <h2 className={`${styles.title} ${isNewCategory ? styles.hidden : ""}`}>
          {category}
        </h2>
        {isNewCategory && (
          <img src={newBadge} alt="New Category" className={styles.badge} />
        )}
        {rowsToRender.map((row, index) => (
          <Fragment key={index}>
            {renderArticlesRow(row, size)}
            {isInterestingCategory && index === 1 && <CtaCard />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
