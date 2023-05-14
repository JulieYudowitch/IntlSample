import styles from "./Banner.module.css";
import Image from "next/dist/client/image";
import { useTranslation } from "next-i18next";

function Banner() {
  const { t } = useTranslation();
  return (
    <header className={styles.banner}>
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

      <h1 className={styles.homeTitleDescript}>{t("common:description")}</h1>
    </header>
  );
}

export default Banner;
