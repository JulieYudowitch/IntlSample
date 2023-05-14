import styles from "./Nav.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/dist/client/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Nav(props) {
  const { asPath, locale } = useRouter();
  const { t } = useTranslation();
  const [showMobileNav, setShowMobileNav] = useState(false);
  let menuref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (
        showMobileNav &&
        menuref.current &&
        !menuref.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [showMobileNav]);

  function handleMenuClick() {
    if (!showMobileNav) {
      setShowMobileNav(true);
    } else {
      setShowMobileNav(false);
    }
  }
  return (
    <nav className={styles.navBarCont}>
      <div className={styles.leftSide}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src="/logo.webp" alt="" width="391" height="256" />
          </div>
        </Link>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.switchLang}>
          <div className={styles.langSelect}>
            <Link href={asPath} locale="es">
              <a
                className={
                  locale === "en" ? styles.langSelect : styles.langActive
                }
              >
                Español
              </a>
            </Link>
          </div>
          <p className={styles.langSelect}>|</p>
          <div className={styles.langSelect}>
            <Link href={asPath} locale="en">
              <a
                className={
                  locale === "es" ? styles.langSelect : styles.langActive
                }
              >
                English
              </a>
            </Link>
          </div>
          <div
            className={styles.mobileMenuIcon}
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <AiOutlineMenu color="#0e1d30" />
          </div>
        </div>

        <div className={styles.menu} id={showMobileNav ? styles.hidden : ""}>
          <div className={styles.hiddenMenu}>
            <div
              className={styles.mobileMenuIcon}
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <AiOutlineClose color="#0e1d30" />
            </div>
          </div>
          <div>
            <Link href="/" ref={menuref} passHref className={styles.navLink}>
              <p className={styles.navLinkName}>{t("common:home")}</p>
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              ref={menuref}
              passHref
              className={styles.navLink}
            >
              <p className={styles.navLinkName}>{t("common:about")}</p>
            </Link>
          </div>
          <div>
            <Link
              href="/shop"
              ref={menuref}
              passHref
              className={styles.navLink}
            >
              <p className={styles.navLinkName}>{t("common:shop")}</p>
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              ref={menuref}
              passHref
              className={styles.navLink}
            >
              <p className={styles.navLinkName}>{t("common:contact")}</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
