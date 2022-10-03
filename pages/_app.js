import "../styles/globals.css";
import "../styles/scss/text_styling.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Navbar from "../components/navbar";
import Footer from "../components/footer";

function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

export default App;