import { useEffect, useState } from 'react';
import DonationService from '../../services/donation-service';
import Campaign from '../../types/campaign';
import Donation from '../../types/donation';
import DonationItem from '../molecules/DonationItem';

const donationService = new DonationService();

interface DonationListProps {
  campaign: Campaign;
}
const DonationList = ({ campaign }: DonationListProps) => {
  const [donations, setDonations] = useState<Donation[]>();

  useEffect(() => {
    async function loadData() {
      const donationData = await donationService.getHistory(
        campaign.categoryId,
        campaign.campaignId
      );
      setDonations(donationData);
    }
    loadData();
  }, [campaign]);

  return (
    <div className="flex flex-col gap-3">
      {donations &&
        donations.map((donation) => {
          return (
            <DonationItem key={donation.transactionId} donation={donation} />
          );
        })}
      {!donations && <div className="lds-dual-ring"></div>}
    </div>
  );
};

export default DonationList;
