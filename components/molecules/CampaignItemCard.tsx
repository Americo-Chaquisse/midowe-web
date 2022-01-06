import Campaign from '../../types/campaign';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CampaignFooter from './CampaignFooter';
import LinkButton from '../atoms/LinkButton';
import AmountPicker from './AmountPicker';

interface CampaignItemCardProps {
  campaign: Campaign;
}
const CampaignItemCard = ({ campaign }: CampaignItemCardProps) => {
  const router = useRouter();

  const handleDonate = (amount: number) => {
    router.push(`/c/${campaign.categoryId}/${campaign.campaignId}/${amount}`);
  };

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <Link
          href={`/c/${campaign.categoryId}/${campaign.campaignId}`}
          passHref
        >
          <Image
            src={campaign.profileImage}
            alt={campaign.title}
            width={277}
            height={174}
            className="w-full h-44 object-cover group-hover:opacity-75 rounded-lg cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex-1 ml-6">
        <Link
          href={`/c/${campaign.categoryId}/${campaign.campaignId}`}
          passHref
        >
          <a>
            <h1 className="text-2xl text-gray-900 hover:text-indigo-900">
              {campaign.title}
            </h1>
            <CampaignFooter campaign={campaign} />
            <p className="mt-2 truncate-2 text-sm">{campaign.content}</p>
          </a>
        </Link>
        <div className="mt-4 flex items-center">
          <LinkButton
            size="sm"
            theme="outline"
            href={`/c/${campaign.categoryId}/${campaign.campaignId}`}
          >
            Ver campanha
          </LinkButton>
          <div className="ml-10">
            <AmountPicker onPick={handleDonate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignItemCard;
