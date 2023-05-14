import styles from '../styles/ThankYou.module.css';
import Footer from '../components/Footer/Footer'
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Nav from '../components/Nav/Nav3';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["thankyou", "common"])),
      locale,
    },
  };
}


function ThankYou(props) {
   const { t } = useTranslation();
  return (
    <div className={styles.thankYouPage}>
      <Head>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Thank-You" />
        <title>Thank-You | IB</title>
      </Head>
      <Nav />
      <div className={styles.thankYou}>
        <div>
          <h1 className={styles.thankYouMessage}>{t("thankyou:thanks")}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;
