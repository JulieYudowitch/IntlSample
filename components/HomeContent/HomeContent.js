import styles from "./HomeContent.module.css";
import Image from "next/dist/client/image";
import { useTranslation } from "next-i18next";

function HomeContent() {
  const { t } = useTranslation();
  return (
    <div className={styles.homeGrid}>
      <div className={styles.homeImgContainer}>
        <Image
          src="/hands.jpg"
          alt=""
          width="1280"
          height="854"
          placeholder="blur"
          blurDataURL="/hands.jpg"
          className={styles.homeImg}
        />
      </div>
      
        <h2 className={styles.homeIntro}>{t("home:intro")}</h2>
        <p className={styles.homeContent}>{t("home:content")}</p>
      
        <div className={styles.nextImgContainer}>
          <Image
            src="/next.webp"
            alt=""
            width="1040"
            height="489"
            placeholder="blur"
            blurDataURL="/next.webp"
            className={styles.nextImg}
          />
        </div>
        <div className={styles.netlifyImgContainer}>
          <Image
            src="/netlify.png"
            alt=""
            width="1582"
            height="441"
            placeholder="blur"
            blurDataURL="/netlify.png"
            className={styles.netlifyImg}
          />
        </div>
    

      
        <h2 className={styles.nextIntro}>{t("home:nextIntro")}</h2>
        <p className={styles.nextContent}>{t("home:nextContent")}</p>
        <p className={styles.netlifyLimits}>{t("home:netlifyLimits")}</p>
     
    </div>
  );
}

export default HomeContent;
