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
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={t("services:tagTitle")} />
        <title>{t("services:tagTitle")}</title>
      </Head>
      <Nav />
      <div className={styles.servicesPage}></div>
      <Footer />
    </div>
  );
}

export default Services;
