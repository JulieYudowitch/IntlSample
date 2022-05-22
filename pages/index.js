/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
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
    <div className={styles.homePage} id="pageTop">
      <Head>
        <meta property="og:title" content="International Business" />
        <meta property="og:image" content="./project.webp" />
        <meta property="og:description" content={t("home:tagContent")} />
        <meta
          property="og:url"
          content="https://internationalbusiness.netlify.app/"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="681" />
        <meta property="og:image:alt" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="./project.webp" />
        <meta name="twitter:title" content="International Business" />
        <meta name="twitter:description" content={t("home:tagContent")} />
        <meta name="twitter:image" content="/project.webp" />
        <meta name="description" content={t("home:tagContent")} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <title>International Business</title>
      </Head>
      <div className={styles.headerContainer}>
        <Nav className={styles.nav} />
        <Banner className={styles.banner} />
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
