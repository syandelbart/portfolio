import "../styles/globals.css";
import "../styles/scss/text_styling.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { appWithTranslation } from 'next-i18next';



import Navbar from "../components/navbar";
import Footer from "../components/footer";

function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

export default appWithTranslation(App);;