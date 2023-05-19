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
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101595.94756383395!2d-80.03994361454237!3d37.27442999861995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d0c4d6aa966fd%3A0x249dbecbdbb0989b!2sRoanoke%2C%20VA!5e0!3m2!1sen!2sus!4v1684441241549!5m2!1sen!2sus"
              width="100% !important"
              height="100% !important"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
