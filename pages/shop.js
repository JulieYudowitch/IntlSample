import Head from "next/head";
import styles from "../styles/Shop.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";

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
      <main>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/bathOil.jpg"
              alt=""
              width="1920"
              height="1222"
              placeholder="blur"
              blurDataURL="/bathOil.jpg"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/shoe.jpg"
              alt=""
              width="1920"
              height="1172"
              placeholder="blur"
              blurDataURL="/shoe.jpg"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/jugs.jpg"
              alt=""
              width="1920"
              height="1440"
              placeholder="blur"
              blurDataURL="/jugs.jpg"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/fishOil.jpg"
              alt=""
              width="1920"
              height="1280"
              placeholder="blur"
              blurDataURL="/fishOil.jpg"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/postcards.jpg"
              alt=""
              width="1920"
              height="1277"
              placeholder="blur"
              blurDataURL="/postcards.jpg"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/cream.jpg"
              alt=""
              width="1920"
              height="1081"
              placeholder="blur"
              blurDataURL="/cream.jpg"
            />
          </div>
          <p>{t("home:intro")}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
