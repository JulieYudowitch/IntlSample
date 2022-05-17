import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "common"])),
      locale,
    },
  };
}

function Contact(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.contactPage}>
      <Head>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content={t("contact:tagTitle")} />
        <title>{t("contact:tagTitle")}</title>
      </Head>

      <Nav />
      <div className={styles.contactPageContent}>
        <form
          action="https://formsubmit.co/julieyudo@gmail.com"
          method="POST"
          className={styles.form}
        >
          <input
            type="text"
            placeholder={t("contact:name")}
            name="name"
            required
            className={styles.field}
          ></input>
          <br></br>
          <textarea
            type="text"
            placeholder={t("contact:message")}
            name="message"
            className={styles.messageField}
          ></textarea>
          <br></br>
          <input
            type="email"
            placeholder={t("contact:email")}
            name="email"
            required
            className={styles.field}
          ></input>
          <br></br>
          <input
            type="hidden"
            name="_next"
            value="https://internationalbusiness.netlify.app/thank-you"
          ></input>
          <button type="submit" className={styles.send}>
            {t("contact:send")}
          </button>
        </form>
        <div className={styles.contactInfo}>
          <p>International Business</p>
          <p>{t("contact:add")}</p>
          <p>{t("contact:num")}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
