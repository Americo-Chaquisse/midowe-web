import { NextPage } from 'next';
import Header from '../components/organisms/Header';
import SignUp from '../components/organisms/SignUp';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const SignUpPage: NextPage = () => {
  return <SimpleTemplate header={<Header />} body={<SignUp />} />;
};

export default SignUpPage;
