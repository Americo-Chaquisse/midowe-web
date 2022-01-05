import Head from 'next/head';
import Footer from '../../../components/molecules/Footer';
import Header from '../../../components/molecules/Header';
import SimpleTemplate from '../../../components/templates/SimpleTemplate';

export default function Campaign() {
  return (
    <>
      <Head>
        <title>Nome da campanha - Midowe</title>
      </Head>
      <SimpleTemplate
        header={<Header />}
        body={<h1>Hello</h1>}
        footer={<Footer />}
      />
    </>
  );
}
