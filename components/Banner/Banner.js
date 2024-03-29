import styles from "./Banner.module.css";
import Image from "next/dist/client/image";
import { useTranslation } from "next-i18next";

function Banner() {
  const { t } = useTranslation();
  return (
    <header className={styles.banner}>
      <div className={styles.bannerImgContainer}>
        <Image
          src="/banner9.webp"
          alt=""
          priority
          width="1920"
          height="602"
          className={styles.bannerImg}
        />
      </div>
      <h1 className={styles.homeTitle}>INTERNATIONAL BUSINESS</h1>
      <p className={styles.homeTitleImgDescript}>{t("common:description")}</p>
      <p className={styles.homeTitleDescript}>{t("common:description")}</p>
      <div className={styles.bannerImg2Container}>
        <Image
          src="/banner2.webp"
          alt=""
          priority
          width="1193"
          height="256"
          className={styles.bannerImg2}
        />
      </div>
    </header>
  );
}

export default Banner;
