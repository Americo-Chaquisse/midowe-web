import Link from 'next/link';
import { useEffect, useState } from 'react';
import BrandingLogo from '../atoms/BrandingLogo';
import LinkButton from '../atoms/LinkButton';
import midoweImg from '../../public/midowe.png';

const Header = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <BrandingLogo imgSrc={midoweImg} name="Midowe" url="/" />

          <div className="sm:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-indigo-600 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <nav className="hidden sm:flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <LinkButton href="/signin" theme="tertiary">
                  Entrar
                </LinkButton>
              </li>

              <li className="ml-4">
                <LinkButton
                  href="/signup"
                  theme="secondary"
                  size="sm"
                  icon={
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  }
                >
                  Registar-se
                </LinkButton>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" mobile-menu bg-white">
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <Link href="/signup">
                <a className="block text-sm px-2 py-4 hover:bg-indigo-600 transition duration-300">
                  Registar-se
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
