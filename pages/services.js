import Head from "next/head";
import styles from "../styles/Services.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["services", "common"])),
      locale,
    },
  };
}

function Services(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.servicesPage}>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={t("services:tagTitle")} />
        <title>{t("services:tagTitle")}</title>
      </Head>
      <Nav />

      <div className={styles.servicesContent}>
        <div className={styles.static}>
          <h1>{t("services:static")}</h1>
          <p>{t("services:staticDetails")}</p>
        </div>
        <div className={styles.seo}>
          <h1>{t("services:seo")}</h1>
          <p>{t("services:seoDetails")}</p>
        </div>
        <div className={styles.design}>
          <h1>{t("services:design")}</h1>
          <p>{t("services:designDetails")}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
