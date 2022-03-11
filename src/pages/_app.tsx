import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useEffect } from 'react';
import AOS from 'aos';

const colors = {
  purple: {
    '50': '#EDE8FD',
    '100': '#CDBEF8',
    '200': '#AD94F4',
    '300': '#8D6BF0',
    '400': '#6E41EC',
    '500': '#4E17E8',
    '600': '#3E13B9',
    '700': '#2F0E8B',
    '800': '#1F095D',
    '900': '#10052E',
  },
  black: {
    '50': '#F2F2F2',
    '100': '#DBDBDB',
    '200': '#C4C4C4',
    '300': '#ADADAD',
    '400': '#969696',
    '500': '#363636',
    '600': '#1f1f1f',
    '700': '#151515',
    '800': '#0c0c0c',
    '900': '#000000',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
