import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useTheme } from 'next-themes'
import { useState } from 'react';
import { faLightbulb, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { regular } from '@fortawesome/free-solid-svg-icons'; 

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
  { nl: 'Startpagina', en: 'Home', path: '/' },
  { nl: 'Projecten', en: 'Projects', path: '/projects' },
];




const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const [option, setOption] = useState(0);
  const updateValue = (e) => {
    if(theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="absolute top-0 left-0 p-10 z-50 flex justify-between w-full  text-lg">
      <div className="child:mx-2">
        {
          navLinks.map((link) => (
            
            <Link key={link.path} suppressHydrationWarning href={{pathname: link.path, query: query}} className={`${ (router.pathname === link.path) ? "text-black dark:text-white underline underline-offset-[6px] decoration-1" : "text-link-inactive dark:text-link-inactive-dark "}`}>
              { t(`navbar.link.${link.path}`) } 
            </Link>
            )
          )
        }      
      </div>
      <div className="float-right flex gap-20">
        <div className="flex gap-4">
          <FontAwesomeIcon style={{ fontSize:23}} icon={faMoon} />
          <label
            htmlFor="default-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
                type="checkbox"
                id="default-toggle"
                className="sr-only peer"
                onChange={updateValue}
                checked={theme != "dark"}
              ></input>
            <div className="-mt-1 after:-mt-px w-11 h-5 bg-gray-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white dark:after:bg-white dark:after:border-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
          <FontAwesomeIcon style={{ fontSize:23}} icon={faLightbulb} />
        </div>
        <div className="flex gap-4">
          <span className={`${query?.lang === "en" ? "text-black dark:text-white underline underline-offset-[6px] decoration-1" : "text-link-inactive dark:text-link-inactive-dark"}`}>
            <LanguageSwitcher lang="en">EN</LanguageSwitcher>
          </span>
          <span className={`${query?.lang === "nl" ? "text-black dark:text-white underline underline-offset-[6px] decoration-1" : "text-link-inactive dark:text-link-inactive-dark"}`}>
            <LanguageSwitcher lang="nl">NL</LanguageSwitcher>
          </span>
        </div>





      </div>
    </nav>

  );
}

export default Navbar;