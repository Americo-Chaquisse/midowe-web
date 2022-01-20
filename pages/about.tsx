import Head from 'next/head';
import AboutUs from '../components/organisms/AboutUs';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Sobre nós - Midowe</title>
      </Head>
      <SimpleTemplate>
        <AboutUs />
      </SimpleTemplate>
    </>
  );
};

export default AboutPage;
