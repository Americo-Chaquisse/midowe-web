import { NextPage } from 'next';
import { Head } from 'next/document';
import SignIn from '../components/organisms/SignIn';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Entrar | Midowe</title>
      </Head>
      <SimpleTemplate>
        <SignIn />
      </SimpleTemplate>
    </>
  );
};
export default SignInPage;
