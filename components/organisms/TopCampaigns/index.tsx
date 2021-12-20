import CategoryCampaigns from '../../../types/category-campaigns';
import TopCampaignList from '../../molecules/TopCampaignList';

interface TopCampaignsProps {
  topPerCategory: CategoryCampaigns[];
}

const TopCampaigns = ({ topPerCategory }: TopCampaignsProps) => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-5">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Categorias</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              As campanhas de angariação de fundos encontram-se organizadas em
              categorias. Escolha uma e veja como pode ajudar.
            </p>
          </div>

          <div className="max-w-sm md:max-w-6xl mx-auto">
            {topPerCategory.map((top, index) => {
              return <TopCampaignList categoryCampaigns={top} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCampaigns;
