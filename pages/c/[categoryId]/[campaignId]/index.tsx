import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../../../../components/molecules/Footer';
import Header from '../../../../components/molecules/Header';
import CampaignProfile from '../../../../components/organisms/CampaignProfile';
import SimpleTemplate from '../../../../components/templates/SimpleTemplate';
import CampaignService from '../../../../services/campaign-service';
import CategoryService from '../../../../services/category-service';
import UserService from '../../../../services/user-service';
import Campaign from '../../../../types/campaign';
import Category from '../../../../types/category';
import { User } from '../../../../types/user';

const campaignService = new CampaignService();
const categoryService = new CategoryService();
const userService = new UserService();

interface CampaignPageProps {
  campaign: Campaign;
  category: Category;
}

const CampaignPage = ({ campaign, category }: CampaignPageProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function loadData() {
      const userData = await userService.getByUsername(campaign.userId);
      setUser(userData);
    }
    loadData();
  }, [campaign.userId]);

  return (
    <>
      <Head>
        <title>{campaign.title} - Midowe</title>
      </Head>
      <SimpleTemplate
        header={<Header />}
        body={
          <CampaignProfile
            campaign={campaign}
            category={category}
            user={user}
          />
        }
        footer={<Footer />}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const campaign = await campaignService.getApprovedById(
    params?.categoryId,
    params?.campaignId
  );

  const category = await categoryService.getById(params?.categoryId);

  return {
    props: {
      campaign,
      category,
    },
  };
};

export default CampaignPage;
