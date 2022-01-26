import { NextPage } from 'next';
import Head from 'next/head';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const TermsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Termos e condições - Midowe</title>
      </Head>
      <SimpleTemplate>
        <h1 className="mx-32">Termos e condições</h1>
      </SimpleTemplate>
    </>
  );
};

export default TermsPage;
