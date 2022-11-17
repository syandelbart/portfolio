import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect } from 'react';

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const navLinks = [
  { nl: 'Startpagina', en: 'Home', path: '/' },
  { nl: 'Projecten', en: 'Projects', path: '/projects' },
];




const Navbar = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <nav className="absolute top-0 left-0 p-10 z-50 flex justify-between w-full text-default text-lg">
      <div className="child:mx-2">
        {
          navLinks.map((link) => (
            <Link key={link.path} suppressHydrationWarning href={{pathname: link.path, query: query}} className={`${ (router.pathname === link.path) ? "text-white underline underline-offset-[6px] decoration-1" : "text-link-inactive"}`}>
              { t(`navbar.link.${link.path}`) }
            </Link>
            )
          )
        }      
      </div>
      <div className="float-right flex gap-4">
        <LanguageSwitcher lang="en">EN</LanguageSwitcher>
        <LanguageSwitcher lang="nl">NL</LanguageSwitcher>

          
      </div>
    </nav>

  );
}

export default Navbar;