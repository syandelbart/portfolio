import "../styles/globals.css";
import "../styles/scss/text_styling.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above



import Navbar from "../components/navbar";
import Footer from "../components/footer";

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem="false" storageKey="theme">
        <main className="bg-[#d7d7d7] dark:bg-background text-black dark:text-default">
          <Head>
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App