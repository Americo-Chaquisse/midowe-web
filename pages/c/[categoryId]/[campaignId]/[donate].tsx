import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Donate from '../../../../components/organisms/Donate';
import SimpleTemplate from '../../../../components/templates/SimpleTemplate';
import CampaignService from '../../../../services/campaign-service';
import Campaign from '../../../../types/campaign';

const campaignService = new CampaignService();

interface DonatePageProps {
  campaign: Campaign;
  amount: string;
}

const DonatePage = ({ campaign, amount }: DonatePageProps) => {
  return (
    <>
      <Head>
        <title>{campaign.title} - Doar - Midowe</title>
      </Head>
      <SimpleTemplate>
        <Donate campaign={campaign} amount={parseInt(amount)} />
      </SimpleTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const campaign = await campaignService.getApprovedById(
    params?.categoryId,
    params?.campaignId
  );

  return {
    props: {
      campaign,
      amount: params?.donate,
    },
  };
};

export default DonatePage;
