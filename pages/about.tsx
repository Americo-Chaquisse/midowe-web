import Head from 'next/head';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';
import AboutUs from '../components/organisms/AboutUs';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Sobre nós - Midowe</title>
      </Head>
      <SimpleTemplate
        header={<Header />}
        body={<AboutUs />}
        footer={<Footer />}
      />
    </>
  );
};

export default AboutPage;
