import styles from "./ArticleSection.module.css";

import newBadge from "../../assets/images/new_badge.png";

import { ArticleCard } from "../ArticleCard/ArticleCard";

export function ArticleSection({ category, articles, size }) {
  const isNewCategory = category === "New";

  return (
    <section className={`${styles.section} ${styles[size]}`}>
      <div className="container">
        {!isNewCategory && <hr className={styles.divider} />}
        <h2 className={`${styles.title} ${isNewCategory ? styles.hidden : ""}`}>
          {category}
        </h2>
        {isNewCategory && <img src={newBadge} alt="New Category" className={styles.badge} />}
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.id}>
              <ArticleCard
                card={article}
                size={size === "middle" ? null : size}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
