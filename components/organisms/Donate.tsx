import Campaign from '../../types/campaign';
import CardImageText from '../atoms/CardImageText';
import CampaignFooter from '../molecules/CampaignFooter';
import DonateForm from '../molecules/DonateForm';
import PaymentMethod from '../molecules/PaymentMethod';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface DonateProps {
  campaign: Campaign;
  amount: number;
}
const Donate = ({ campaign, amount }: DonateProps) => {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto flex">
            <div className="w-1/3">
              <h1 className="mb-4 text-2xl font-semibold text-gray-800">
                <a
                  className="text-indigo-600"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.back();
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
                </a>
                Doar {amount} MT
              </h1>
              <CardImageText
                title={campaign.title}
                image={campaign.profileImage}
                link={`/c/${campaign.categoryId}/${campaign.campaignId}`}
                footer={<CampaignFooter campaign={campaign} />}
              />
              <div className="h-8"></div>
              <PaymentMethod />
            </div>
            <div className="ml-10 flex-1">
              <DonateForm amount={amount} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
