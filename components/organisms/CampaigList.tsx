import Campaign from '../../types/campaign';
import CampaignItemCard from '../molecules/CampaignItemCard';

interface CampaignListProps {
  campaigns: Campaign[] | undefined;
}
const CampaignList = ({ campaigns }: CampaignListProps) => {
  return (
    <div className="flex flex-col gap-14">
      {campaigns &&
        campaigns.map((campain, index) => {
          return <CampaignItemCard campaign={campain} key={index} />;
        })}
    </div>
  );
};

export default CampaignList;
