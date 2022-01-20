import { NextPage } from 'next';
import Head from 'next/head';
import ResetPassword from '../components/organisms/ResetPassword';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const ResetPasswordPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redefinir a password | Midowe</title>
      </Head>
      <SimpleTemplate>
        <ResetPassword />
      </SimpleTemplate>
    </>
  );
};

export default ResetPasswordPage;
