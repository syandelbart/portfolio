import styles from '../styles/scss/Home.module.scss'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope, faIdCard,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const { t } = useTranslation('home');
  return (
      <div className="h-screen max-h-screen w-screen flex flex-col justify-center items-center relative bg-background" >
        <Head>
          <title>Home - syandelbart.com</title>
          <meta property="og:title" content="Home - syandelbart.com" />
          <meta name="description" content="Get to know me and my work!" key="desc" />
          <meta
            property="og:image"
            content="https://www.syandelbart.com/images/me.png"
          />
        </Head>

        <div className="flex text-default justify-around w-full  max-w-6xl ">
          <div className="flex flex-col max-w-[33vw] items-start">
            <h1 className="text-4xl font-bold">{t("intro.title")}</h1>
            <p className="text-xl my-2 max-w-[300px]">
              {t("intro.description")}
            </p>
            <Link href="/" className="bg-backdrop py-3 px-10 text-2xl rounded-md my-8">
              {t("intro.button")}
            </Link>
            
          </div>
          <div className="flex flex-col justify-center gap-2 items-center text-xl text-soft">
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
          <div>
            <Image
                src="/images/me.png"
                alt="A picture of me, Syan"
                width={300}
                height={300}
                className="border-[10px]  border-backdrop"
              />
          </div>

        </div>
      </div>
  )
}