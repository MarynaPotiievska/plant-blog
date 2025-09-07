import styles from "./ArticleCard.module.css";

import { formatDate } from "../../utils/formateDate";

export function ArticleCard({ card, size }) {
  const { image, title, annotation, date, readingTime } = card;

  return (
    <div className={`${styles.card} ${size ? styles[size] : ""}`}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{formatDate(date)}</span>
          <span>·</span>
          <span className={styles.readingTime}>{readingTime}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{annotation}</p>
      </div>
    </div>
  );
}
