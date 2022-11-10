import Link from 'next/link'
import { useRouter } from "next/router";

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/projects' },
];




const Navbar = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  )

  return (
    <nav className="absolute top-0 left-0 p-10 z-50 flex justify-between w-full text-default text-lg">
      <div className="child:mx-2">
        {
          navLinks.map((link) => (
            <Link href={link.path}>
              <a className={`${ (router.pathname === link.path) ? "activeLink underline underline-offset-[6px] decoration-1" : ""}  text-link-inactive`}>
                { link.title }
              </a>
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
                legacyBehavior
              >
                <a className={`${ (locale === activeLocale) ? "activeLink order-1" : "order-2"}  text-link-inactive`}>
                  {locale.toUpperCase()}
                </a>
              </Link>
            )
          })}
          
      </div>

      <style jsx>{`
          .activeLink {
            color: #ffffff;
          }
        `}</style>
    </nav>

  );
}

export default Navbar;