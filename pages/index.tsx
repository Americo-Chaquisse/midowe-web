import type { GetServerSideProps, NextPage } from 'next';
import Header from '../components/molecules/Header';
import SimpleTemplate from '../components/templates/SimpleTemplate';
import { Campaign } from '../types/campaign';
import CampaignService from '../services/campaign-service';
import HeroHome from '../components/molecules/HeroHome';
import Featured from '../components/organisms/Featured';

interface HomePageProps {
  featured: Campaign[];
}

const HomePage = ({ featured }: HomePageProps) => {
  const components: JSX.Element[] = [];

  components.push(<HeroHome key={1} />);
  components.push(<Featured key={2} campaigns={featured} />);

  return <SimpleTemplate header={<Header />} body={components} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const campaignService = new CampaignService();

  const featured: Campaign[] = await campaignService.getFeatured();
  const topByCategory: Object[] = [];

  return {
    props: {
      featured,
      topByCategory,
    },
  };
};

export default HomePage;
