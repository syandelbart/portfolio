import Link from 'next/link'
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

const navLinks = [
  { nl: 'Startpagina', en: 'Home', path: '/' },
  { nl: 'Projecten', en: 'Projects', path: '/projects' },
];




const Navbar = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  return (
    <nav className="absolute top-0 left-0 p-10 z-50 flex justify-between w-full text-default text-lg">
      <div className="child:mx-2">
        {
          navLinks.map((link) => (
            <Link key={link.path} suppressHydrationWarning href={link.path} className={`${ (router.pathname === link.path) ? "text-white underline underline-offset-[6px] decoration-1" : "text-link-inactive"}`}>
              { link[activeLocale] }
            </Link>
            )
          )
        }      
      </div>
      <div className="float-right flex gap-4">
        {locales.map((locale) => {
            const { pathname, query, asPath } = router
            return (
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                key={locale}
                className={`${ (locale === activeLocale) ? "text-white order-1 pointer-events-none" : "text-link-inactive order-2"}`}
              >
                {locale.toUpperCase()}
              </Link>
            )
          })}
          
      </div>
    </nav>

  );
}

export default Navbar;