import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SignIn from '../components/organisms/SignIn';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const SignInPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Entrar | Midowe</title>
      </Head>
      <SimpleTemplate footer={false}>
        <SignIn
          onSuccess={() => {
            router.push('/u');
          }}
        />
      </SimpleTemplate>
    </>
  );
};
export default SignInPage;
