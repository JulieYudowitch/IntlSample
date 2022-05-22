import Head from "next/head";
import styles from "../styles/Shop.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["shop", "common"])),
      locale,
    },
  };
}

function Shop(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.shopPage}>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={t("shop:tagTitle")} />
        <title>{t("shop:tagTitle")}</title>
      </Head>
      <Nav />
      
      <Footer />
    </div>
  );
}

export default Shop;
