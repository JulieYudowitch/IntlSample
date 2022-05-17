import styles from "./Nav.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/dist/client/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsGlobe2 } from 'react-icons/bs';
import React from 'react';
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
    <nav className={styles.navbarcont}>
      <div className={styles.navbar}>
        <div className={styles.leftside}>
          <Link href="/" passHref>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="" width="890" height="890" />
            </div>
          </Link>
        </div>

        <div className={styles.rightsidecont}>
          <div className={styles.rightside}>
            <div
              className={styles.navbarlinks}
              onClick={handleMenuClick}
              id={showMobileNav ? styles.hidden : ""}
            >
              <div className={styles.hiddenMenu}>
                <div
                  className={styles.mobilemenuicon}
                  onClick={() => setShowMobileNav(!showMobileNav)}
                >
                  <AiOutlineClose color="#d4d9df" />
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>{t("common:home")}</p>
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>{t("common:about")}</p>
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>{t("common:contact")}</p>
                </Link>
              </div>
            </div>

            <div
              className={styles.mobilemenuicon}
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <AiOutlineMenu color="#d4d9df" />
            </div>
            <div>
              <div className={styles.switchlang}>
                {locale === "en" && (
                  <div className={styles.langbutt}>
                    <BsGlobe2 />
                    <Link href={asPath} locale="es">
                      <a className={styles.langbutt}>Español</a>
                    </Link>
                  </div>
                )}
                {locale === "es" && (
                  <div className={styles.langbutt}>
                    <BsGlobe2 />
                    <Link href={asPath} locale="en">
                      <a className={styles.langbutt}>English</a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
