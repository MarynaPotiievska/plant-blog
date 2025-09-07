import styles from "./MobileMenu.module.css";

import { ReactComponent as MobileMenuIcon } from "../../assets/icons/burger-menu.svg";

import { NavBar } from "../NavBar/NavBar";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles["mobile-menu-wrapper"]}>
      <button className="header-button" onClick={handleClick}>
        <MobileMenuIcon />
      </button>
      {isOpen && (
        <div className={styles["menu-wrapper"]}>
          <NavBar type={"mobile"} />
        </div>
      )}
    </div>
  );
}
