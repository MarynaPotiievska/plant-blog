import styles from "./ArticleCard.module.css";

import { formatDate } from "../../utils";

export function ArticleCard({ card, size }) {
  const { image, title, annotation, date, readingTime } = card;

  return (
    <a href="/" className={`${styles.card} ${size ? styles[size] : ""}`}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{formatDate(date)}</span>
          <span>·</span>
          <span>{readingTime}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{annotation}</p>
      </div>
    </a>
  );
}
