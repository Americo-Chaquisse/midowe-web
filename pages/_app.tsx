import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
