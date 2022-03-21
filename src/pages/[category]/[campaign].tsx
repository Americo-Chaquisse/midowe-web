import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { Header } from '../../components/layout/header';
import { SimpleTemplate } from '../../components/templates/simple-template';
import CampaignHero from '../../features/campaign/campaign-hero';
import { CampaignItems } from '../../features/category/campaign-items';
import { appName } from '../../helpers/constants';
import { useCampaignById } from '../../service/campaign-service';

type CampaignPageProps = {
  categoryId: string;
  campaignId: string;
};

export default function CampaignPage({
  categoryId,
  campaignId,
}: CampaignPageProps) {
  const { campaign, isLoading, isError } = useCampaignById(
    categoryId,
    campaignId
  );

  return (
    <>
      <Head>
        <title>
          {campaign && campaign.title} - {appName}
        </title>
      </Head>
      <SimpleTemplate>
        {campaign && <CampaignHero campaign={campaign} />}
        {isLoading && <SpinnerCenter />}
        {isError && <ErrorAlert />}
      </SimpleTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      categoryId: params?.category,
      campaignId: params?.campaign,
    },
  };
};
