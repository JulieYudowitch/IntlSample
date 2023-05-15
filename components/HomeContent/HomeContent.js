import styles from "./HomeContent.module.css";
import Image from "next/dist/client/image";
import { useTranslation } from "next-i18next";

function HomeContent() {
  const { t } = useTranslation();
  return (
    <div className={styles.homeGrid}>
      <div className={styles.homeImgContainer}>
        <div className={styles.homeImg}>
          <Image
            src="/job.jpg"
            alt=""
            width="1920"
            height="1156"
            placeholder="blur"
            blurDataURL="/job.jpg"
          />
        </div>
        <p>{t("home:intro")}</p>
      </div>
      <div className={styles.homeIntroCard}>
        <div className={styles.homeImgContainer}>
          <div className={styles.homeImg}>
            <Image
              src="/meeting.jpg"
              alt=""
              width="1920"
              height="1280"
              placeholder="blur"
              blurDataURL="/meeting.jpg"
            />
          </div>
        </div>
        <p>{t("home:content")}</p>
      </div>
    </div>
  );
}

export default HomeContent;
