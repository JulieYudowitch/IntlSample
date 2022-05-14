import Link from "next/link";
import styles from '../styles/404.module.css';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

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
        <meta name="description" content={t("404:description")} />
        <title>{t("404:description")}</title>
      </Head>

      <Nav />
      <div className={styles.fourOhFourPageContent}>
        <h1>{t("404:notFound")}</h1>
        <Link href="/">
          <a>{t("404:return")}</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
