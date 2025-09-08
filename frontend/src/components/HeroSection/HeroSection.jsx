import styles from "./HeroSection.module.css";

import heroImage from "../../assets/images/hero-image.png";

import { ReactComponent as SearchIcon } from "../../assets/icons/input-search.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/chevron_left.svg";

export function HeroSection({ temperatureData, handleSearch }) {
  const { temperature, loading, error } = temperatureData;
  let temperatureValue = "";
  if (loading) {
    temperatureValue = "loading...";
  } else if (error || !temperature) {
    temperatureValue = "something went wrong, please try again later";
  } else {
    temperatureValue = `${temperature}°C`;
  }

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Blog", link: "/" },
  ];

  return (
    <section className={styles["hero-section"]}>
      <div className="container">
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className={styles.breadcrumb}>
              <a href={crumb.link} className={styles["breadcrumb-link"]}>
                {crumb.label}
              </a>
              <ArrowIcon className={styles["breadcrumb-icon"]} />
            </span>
          ))}
        </div>
        <div className={styles.card}>
          <h1 className={styles["card-title"]}>
            Stay always tuned with planting trends
          </h1>
          {!loading && !error && temperature !== null && (
            <p className={`${styles["card-subtitle"]} desktop`}>
              Current temperature is: {temperatureValue}
            </p>
          )}
          <p className={`${styles["card-subtitle"]} mobile-only`}>
            Tips & Tricks{" "}
            <span className={styles.middle}>selected specially for</span> you!
          </p>
          <div className={styles["search-wrapper"]}>
            <input
              type="text"
              placeholder="Search"
              className={styles["search-input"]}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <SearchIcon />
          </div>
          <img src={heroImage} alt="Hero" className={styles["card-image"]} />
        </div>
      </div>
    </section>
  );
}
