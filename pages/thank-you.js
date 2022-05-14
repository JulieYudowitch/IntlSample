import styles from '../styles/ThankYou.module.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'
import Head from "next/head";

function ThankYou(props) {
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
          <h1 className={styles.thankYouMessage}>Thank-you for your message. I will be in touch shortly.</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;
