import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Footer from '../../../../components/molecules/Footer';
import Header from '../../../../components/molecules/Header';
import CampaignProfile from '../../../../components/organisms/CampaignProfile';
import SimpleTemplate from '../../../../components/templates/SimpleTemplate';
import CampaignService from '../../../../services/campaign-service';
import CategoryService from '../../../../services/category-service';
import Campaign from '../../../../types/campaign';
import Category from '../../../../types/category';

const campaignService = new CampaignService();
const categoryService = new CategoryService();

interface CampaignPageProps {
  campaign: Campaign;
  category: Category;
}

const CampaignPage = ({ campaign, category }: CampaignPageProps) => {
  return (
    <>
      <Head>
        <title>{campaign.title} - Midowe</title>
      </Head>
      <SimpleTemplate
        header={<Header />}
        body={<CampaignProfile campaign={campaign} category={category} />}
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
