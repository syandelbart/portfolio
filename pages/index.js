import Layout from '../components/layout'
import styles from '../styles/scss/Home.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope, faIdCard,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <Layout>
      <main>
        <div
          id="home"
          className="h-screen max-h-screen w-screen flex flex-col justify-center items-center relative"
        >
          <div
            className={`${styles.main_title_header} uppercase text-center flex flex-col items-center justify-center select-none`}
          >
            <h1 className="border-b-2 border-black">Syan Delbart</h1>
            <h3>Portfolio</h3>
          </div>
          <div className={`${styles.main_navigation_support} pt-10 pb-10`}>
            <a href="mailto:syan.delbart@hotmail.com">
              <FontAwesomeIcon style={{ fontSize:20}} icon={faEnvelope} />
              Send me an e-mail
            </a>
          </div>

          <div className="max-h-5 text-3xl children:text-black child:mx-1">
            <a className="relative" target="_blank" href="https://www.linkedin.com/in/syandelbart/">
            <FontAwesomeIcon style={{ fontSize:30}} icon={faLinkedin} />
              <span className="tooltip">Linkedin</span>
            </a>
            <a className="relative" target="_blank" href="https://github.com/syandelbart">
              <FontAwesomeIcon style={{ fontSize:30}} icon={faGithub} />
              <span className="tooltip">GitHub</span>
            </a>
            <a className="relative" target="_blank" href="https://codepen.io/syandelbart">
            <FontAwesomeIcon style={{ fontSize:30}} icon={faCodepen} />
              <span className="tooltip">CodePen</span>
            </a>
            <a className="relative" target="_blank" href="/CV.pdf">
            <FontAwesomeIcon style={{ fontSize:30}} icon={faIdCard} />
              <span className="tooltip">CV</span>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}