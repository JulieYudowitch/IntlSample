import Link from "next/link";
import styles from '../styles/404.module.css';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/dist/client/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["404", "common"])),
      locale,
    },
  };
}

export default function FourOhFour(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.fourOhFourPage}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={t("404:tagTitle")} />
        <title>{t("404:tagTitle")}</title>
      </Head>
      <Nav />
      <div className={styles.spacer}></div>

      <div className={styles.fourOhFourPageContent}>
        <h1>404</h1>
        <h2>{t("404:notFound")}</h2>
        <Link href="/">
          <a>{t("404:return")}</a>
        </Link>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
