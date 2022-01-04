import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/molecules/Header';
import SimpleTemplate from '../components/templates/SimpleTemplate';
import Campaign from '../types/campaign';
import CampaignService from '../services/campaign-service';
import HeroHome from '../components/molecules/HeroHome';
import Featured from '../components/organisms/Featured';
import Footer from '../components/molecules/Footer';
import Contact from '../components/organisms/Contact';
import TopCampaigns from '../components/organisms/TopCampaigns';
import CategoryCampaigns from '../types/category-campaigns';

interface HomePageProps {
  featured: Campaign[];
  topPerCategory: CategoryCampaigns[];
}

const HomePage = ({ featured, topPerCategory }: HomePageProps) => {
  const components: JSX.Element[] = [];

  components.push(<HeroHome key={1} />);
  components.push(<Featured key={2} campaigns={featured} />);
  components.push(<TopCampaigns topPerCategory={topPerCategory} key={3} />);
  components.push(<Contact key={4} />);

  return (
    <>
      <Head>
        <title>Midowe - Doar para ajudar</title>
      </Head>
      <SimpleTemplate
        header={<Header />}
        body={components}
        footer={<Footer />}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const campaignService = new CampaignService();
  const maxPerPage = 5;

  const featured: Campaign[] = await campaignService.getFeatured();
  const topPerCategory: CategoryCampaigns[] =
    await campaignService.getTopPerCategory(maxPerPage);

  return {
    props: {
      featured,
      topPerCategory,
    },
  };
};

export default HomePage;
