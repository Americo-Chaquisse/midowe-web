import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import LandingPage from '../components/organisms/LandingPage';
import SimpleTemplate from '../components/templates/SimpleTemplate';

const HomePage: NextPage = () => {
  return <SimpleTemplate header={<Header />} body={<LandingPage />} />;
};

export default HomePage;
