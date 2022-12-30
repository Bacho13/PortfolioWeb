import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigationLinks = [
  { key: "about", name: "about", href: "/about" },
  { key: "portfolio", name: "portfolio", href: "/portfolio" },
  { key: "contact", name: "contact", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.b}>B</div>
          </Link>
          <h1>Bacho</h1>
          <div className={styles.menuIcon} onClick={handleClick}>
            {isOpen ? (
              <CloseIcon className={styles.xIcon} />
            ) : (
              <MenuIcon className={styles.icon} />
            )}
          </div>
        </div>
        <div className={styles.wideMenu}>
          <ul>
            {navigationLinks.map((item) => (
              <Link
                className={styles.link}
                key={item.key}
                color="white"
                variant="button"
                underline="none"
                href={item.href}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        {isOpen && (
          <div className={styles.narrowMenu}>
            <ul>
              {navigationLinks.map((item) => (
                <Link
                  className={styles.link}
                  key={item.key}
                  color="white"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
