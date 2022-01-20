import { faFolderOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import LinkButton from '../../../components/atoms/LinkButton';
import TitleHeader from '../../../components/atoms/TitleHeader';
import EmptyCampaigns from '../../../components/molecules/EmptyCampaigns';
import UserTemplate from '../../../components/templates/UserTemplate';
import Campaign from '../../../types/campaign';

const CampaignsPage = () => {
  const [campaigns, setCampains] = useState<Campaign[] | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setCampains([]);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>Minhas Campanhas - Midowe</title>
      </Head>
      <UserTemplate>
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {campaigns != undefined && campaigns.length > 0 && (
              <h1>Campaign list</h1>
            )}

            {campaigns != undefined && campaigns.length === 0 && (
              <EmptyCampaigns />
            )}

            {campaigns == undefined && (
              <div className="text-center flex justify-center">
                <div className="rounded-lg bg-white px-5 py-4 shadow-lg">
                  <div className="lds-dual-ring"></div>
                </div>
              </div>
            )}
          </div>
        </section>
      </UserTemplate>
    </>
  );
};

export default CampaignsPage;
