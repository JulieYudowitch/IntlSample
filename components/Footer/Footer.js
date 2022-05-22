import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function Footer() {
   const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/JulieYudowitch"
            passHref
            className={styles.navlink}
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.socialLink}
              color="#0e1d30"
              icon={faGithub}
              size="2x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/julie-yudowitch-041645208"
            passHref
            className={styles.navlink}
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.socialLink}
              color="#0e1d30"
              icon={faLinkedin}
              size="2x"
            />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} {t("common:copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
