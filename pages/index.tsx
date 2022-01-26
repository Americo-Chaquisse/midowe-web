import type { GetStaticProps } from 'next';
import Head from 'next/head';
import SimpleTemplate from '../components/templates/SimpleTemplate';
import Campaign from '../types/campaign';
import CampaignService from '../services/campaign-service';
import HeroHome from '../components/molecules/HeroHome';
import Featured from '../components/organisms/Featured';
import Contact from '../components/organisms/Contact';
import TopCampaigns from '../components/organisms/TopCampaigns';
import CategoryCampaigns from '../types/category-campaigns';
import { useEffect, useState } from 'react';

const campaignService = new CampaignService();

interface HomePageProps {
  featured: Campaign[];
  topPerCategory: CategoryCampaigns[];
}

const HomePage = ({ featured }: HomePageProps) => {
  const [topPerCategory, setTopPerCategory] = useState<CategoryCampaigns[]>();

  useEffect(() => {
    async function loadTopCategory() {
      const topList: CategoryCampaigns[] =
        await campaignService.getTopPerCategory(5);
      setTopPerCategory(topList);
    }

    loadTopCategory();
  }, []);

  return (
    <>
      <Head>
        <title>Midowe - Doar para ajudar</title>
      </Head>
      <SimpleTemplate>
        <HeroHome />
        <Featured campaigns={featured} />
        <TopCampaigns topPerCategory={topPerCategory} />
        <Contact />
      </SimpleTemplate>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featured: Campaign[] = await campaignService.getFeatured();

  return {
    props: {
      featured,
    },
    revalidate: 60 * 5, //seconds
  };
};

export default HomePage;
