import { NextPage } from 'next';
import Head from 'next/head';
import SignUp from '../components/organisms/SignUp';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registar-se | Midowe</title>
      </Head>
      <SimpleTemplate>
        <SignUp />
      </SimpleTemplate>
    </>
  );
};

export default SignUpPage;
