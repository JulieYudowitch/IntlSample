import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function Footer() {
   const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footContent}>
        <div className={styles.socialLinks}>
          <Link href="/" passHref className={styles.navlink}>
            <FontAwesomeIcon
              className={styles.socialLink}
              color="#0e1d30"
              icon={faFacebook}
              size="2x"
            />
          </Link>
          <Link href="/" passHref className={styles.navlink}>
            <FontAwesomeIcon
              className={styles.socialLink}
              color="#0e1d30"
              icon={faInstagram}
              size="2x"
            />
          </Link>
          <Link href="/" passHref className={styles.navlink}>
            <FontAwesomeIcon
              className={styles.socialLink}
              color="#0e1d30"
              icon={faTwitter}
              size="2x"
            />
          </Link>
        </div>
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} {t("common:copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
