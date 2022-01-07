import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Campaign from '../../types/campaign';
import { useRouter } from 'next/router';
import CampaignFooter from '../molecules/CampaignFooter';
import Link from 'next/link';
import Category from '../../types/category';
import AmountPicker from '../molecules/AmountPicker';
import CampaignImages from '../molecules/CampaignImages';
import parse from 'html-react-parser';

interface CampaignProfileProps {
  campaign: Campaign;
  category: Category;
}

const CampaignProfile = ({ campaign, category }: CampaignProfileProps) => {
  const router = useRouter();

  const handleDonate = (amount: number) => {
    router.push(`/c/${campaign.categoryId}/${campaign.campaignId}/${amount}`);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="mx-auto flex">
            <div className="w-2/5">
              <CampaignImages campaign={campaign} />
            </div>
            <div className="ml-10 flex-1">
              <div className="mt-4">
                <Link href={`/c/${category.id}`}>
                  <a>
                    <p>{category.description}</p>
                  </a>
                </Link>
                <h1 className="text-3xl font-extrabold text-gray-900 hover:text-indigo-900">
                  {campaign.title}
                </h1>
                <CampaignFooter campaign={campaign} expand={true} />
                <div className="mt-6 w-2/3">
                  <AmountPicker onPick={handleDonate} />
                </div>
              </div>

              <div className="mt-16 mb-5">
                <p className="text-lg mb-5 font-bold">Sobre a campanha</p>
                {parse(campaign.content)}
              </div>

              {/* Author info*/}

              {/* Donation history */}

              {/* Share on social networks */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignProfile;
