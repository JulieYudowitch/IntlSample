import styles from "./Banner.module.css";
import Image from "next/dist/client/image";
import { useTranslation } from "next-i18next";

function Banner() {
   const { t } = useTranslation();
  return (
    <header>
      <div className={styles.banner}>
        <div className={styles.bannerImgContainer}>
          <Image
            src="/banner.webp"
            alt=""
            priority
            width="1920"
            height="602"
            className={styles.bannerImg}
          />
        </div>
        <div className={styles.homeTitleWrapper}>
          <h1 className={styles.homeTitle}>
            INTERNATIONAL BUSINESS<br></br>
            <span className={styles.homeTitleDescript}>
              {t("common:description")}
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
