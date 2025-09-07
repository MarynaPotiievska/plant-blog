import styles from "./NavBar.module.css";

export function NavBar({ type }) {
  return (
    <nav
      className={`${styles.nav} ${type === "desktop" ? type : styles[type]}`}
    >
      <ul>
        <li className={styles.link}>
          <a href="/">Discover</a>
        </li>
        <li className={styles.link}>
          <a href="/">My Plants</a>
        </li>
        <li className={styles.link}>
          <a href="/">Diseases</a>
        </li>
        <li className={styles.link}>
          <a href="/">Blog</a>
        </li>
        <li className={styles.link}>
          <a href="/">FAQ</a>
        </li>
        <li className={styles.link}>
          <a href="/">Contact Us</a>
        </li>
        {type === "mobile" && (
          <li className={styles.link}>
            <a href="/">Profile</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
