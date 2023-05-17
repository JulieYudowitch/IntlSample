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
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={t("404:description")} />
        <title>{t("404:description")}</title>
      </Head>
      <Nav />
      <div className={styles.fourOhFourPage}>
        <Image src="/flags.jpg" alt="" width="1920" height="1357" className={styles.img404}/>

        <div className={styles.fourOhFourPageContent}>
          <h1>404</h1>
          <h2>{t("404:notFound")}</h2>
          <Link href="/">
            <a>{t("404:return")}</a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
