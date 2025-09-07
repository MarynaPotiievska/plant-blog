import styles from "./Footer.module.css";

const footerLinks = [
  { text: "Terms of Service", href: "/" },
  { text: "Privacy Policy", href: "/" },
  { text: "Subscription Policy", href: "/" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={styles.list}>
          {footerLinks.map((link) => (
            <li key={link.text} className={styles.item}>
              <a href={link.href} className={styles.link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.text}>
          ©Copyright © 2020 PlantIn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
