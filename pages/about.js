/* eslint-disable react/no-unescaped-entities */
import Head from "next/dist/shared/lib/head";
import styles from "../styles/About.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
      locale,
    },
  };
}

function About(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.aboutPage} id="aboutPageTop">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={t("about:tagTitle")} />
        <title>{t("about:tagTitle")}</title>
      </Head>
      <Nav />
      <div className={styles.aboutPageContent}>
        <div className={styles.aboutGrid}>
          <p className={styles.aboutImgName}>{t("about:about")}</p>

          <div className={styles.infoContainer}>
            <p className={styles.info}>{t("about:listTitle")}</p>
            <ul className={styles.infoUL}>
              <li className={styles.infoLI}>{t("about:listItem1")}</li>
              <li className={styles.infoLI}>{t("about:listItem2")}</li>
              <li className={styles.infoLI}>{t("about:listItem3")}</li>
              <li className={styles.infoLI}>{t("about:listItem4")}</li>
              <li className={styles.infoLI}>{t("about:listItem5")}</li>
              <li className={styles.infoLI}>{t("about:listItem6")}</li>
              <li className={styles.infoLI}>{t("about:listItem7")}</li>
              <li className={styles.infoLI}>{t("about:listItem8")}</li>
              <li className={styles.infoLI}>{t("about:listItem9")}</li>
              <li className={styles.infoLI}>{t("about:listItem10")}</li>
              <li className={styles.infoLI}>{t("about:listItem11")}</li>
              <li className={styles.infoLI}>{t("about:listItem12")}</li>
              <li className={styles.infoLI}>{t("about:listItem13")}</li>
              <li className={styles.infoLI}>{t("about:listItem14")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
