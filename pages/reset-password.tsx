import { NextPage } from 'next';
import Header from '../components/molecules/Header';
import ResetPassword from '../components/organisms/ResetPassword';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const ResetPasswordPage: NextPage = () => {
  return <SimpleTemplate header={<Header />} body={<ResetPassword />} />;
};

export default ResetPasswordPage;
