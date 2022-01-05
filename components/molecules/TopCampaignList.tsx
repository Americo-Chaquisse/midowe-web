import CategoryCampaigns from '../../types/category-campaigns';
import CardImageText from '../atoms/CardImageText';
import CardText from '../atoms/CardText';
import CampaignFooter from './CampaignFooter';

interface TopCampaignListProps {
  categoryCampaigns: CategoryCampaigns;
}

const TopCampaignList = ({ categoryCampaigns }: TopCampaignListProps) => {
  return (
    <div className="grid mb-8 grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-center">
      <CardText
        title={categoryCampaigns.category.name}
        link={`c/${categoryCampaigns.category.id}`}
      />

      {categoryCampaigns.campaigns.map((campaign, index) => {
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

export default TopCampaignList;
