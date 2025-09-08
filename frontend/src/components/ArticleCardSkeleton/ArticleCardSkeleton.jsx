import styles from "./ArticleCardSkeleton.module.css";

export function ArticleCardSkeleton() {
  return (
    <div className={`${styles.card} }`}>
      <div className={`${styles.image}`} />
      <div className={styles.content}>
        <div className={styles.meta} >
          <span>&nbsp;</span>
        </div>
        <h3 className={styles.title}>&nbsp;</h3>
        <p className={styles.description} />
      </div>
    </div>
  );
}
