import Campaign from '../../types/campaign';
import CardImageText from '../atoms/CardImageText';
import CampaignFooter from './CampaignFooter';

interface FeaturedProps {
  campaigns: Campaign[];
}
const FeaturedList = ({ campaigns }: FeaturedProps) => {
  return (
    <div className="grid mb-8 grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-center">
      {campaigns.map((campaign, index) => {
        return (
          <CardImageText
            title={campaign.title}
            image={campaign.profileImage}
            link={`/c/${campaign.categoryId}/${campaign.campaignId}`}
            key={index}
            index={index}
            footer={<CampaignFooter campaign={campaign} />}
          />
        );
      })}
    </div>
  );
};

export default FeaturedList;
