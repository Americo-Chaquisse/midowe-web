import { NextPage } from 'next';
import Head from 'next/head';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const PrivacyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Politica de privacidade - Midowe</title>
      </Head>
      <SimpleTemplate>
        <h1 className="mx-32">Politica de privacidade</h1>
      </SimpleTemplate>
    </>
  );
};

export default PrivacyPage;
