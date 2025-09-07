import styles from "./Header.module.css";

import logo from "../../assets/images/logo.png";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";

import { NavBar } from "../NavBar/NavBar";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["nav-wrapper"]}>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <NavBar type={"desktop"} />
      </div>
      <div className={styles["buttons-wrapper"]}>
        <button className="header-button">
          <SearchIcon className={styles.icon} />
        </button>
        <a href="/" className="header-button desktop">
          <ProfileIcon className={styles.icon} />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
