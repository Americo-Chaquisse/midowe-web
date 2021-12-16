import { NextPage } from 'next';
import Header from '../components/molecules/Header';
import SignIn from '../components/organisms/SignIn';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const SignInPage: NextPage = () => {
  return <SimpleTemplate header={<Header />} body={<SignIn />} />;
};
export default SignInPage;
