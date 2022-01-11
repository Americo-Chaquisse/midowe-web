import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Router from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });

    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <div className="rounded-lg bg-white px-5 py-4 shadow-lg">
            <div className="lds-dual-ring"></div>
          </div>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
