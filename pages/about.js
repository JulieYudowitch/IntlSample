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
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={t("about:tagTitle")} />
        <title>{t("about:tagTitle")}</title>
      </Head>
      <Nav />
      <div className={styles.aboutPage}>
        
      </div>
      <Footer />
    </div>
  );
}

export default About;
