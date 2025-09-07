import styles from "./CtaCard.module.css";

import logo from "../../assets/images/logo.png";
import ctaImage from "../../assets/images/cta_image.png"

export function CtaCard() {
  return (
    <div className={styles.card}>
      <img src={logo} alt="PlantIn Logo" className="logo" />
      <div className={styles["text-wrapper"]}>
        <h4 className={styles.title}>
          Get unlimited access to exclusive articles
        </h4>
        <p className={styles.description}>
          Get rid of limits and read everything you wish
        </p>
      </div>
      <a href="/" className={styles.button}>Try For Free</a>
      <img src={ctaImage} alt="CTA Background" className={styles.image} />
    </div>
  );
}