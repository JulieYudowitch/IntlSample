/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import styles from "../styles/Test.module.css";
import TestNav from "../components/TestNav.Module.css/TestNav";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
      locale,
    },
  };
}

export default function Home(props) {
  const { t } = useTranslation();
  return (
      <div className={styles.homePage}>
          
          <TestNav className={styles.nav} />
          
      <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <Banner className={styles.banner} />
        </div>
      </div>

      <div className={styles.homeGrid}>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/bags.webp"
              alt=""
              width="600"
              height="423"
              placeholder="blur"
              blurDataURL="/bags.webp"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
        <div className={styles.homeIntroCard}>
          <h2 className={styles.homeIntro}>{t("home:info")}</h2>
          <p>{t("home:content")}</p>
        </div>
          </div>
          
          <Footer />
          
    </div>
  );
}
