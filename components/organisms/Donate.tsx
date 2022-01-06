import Campaign from '../../types/campaign';
import CardImageText from '../atoms/CardImageText';
import CampaignFooter from '../molecules/CampaignFooter';
import DonateForm, { DonateFormValues } from '../molecules/DonateForm';
import PaymentMethod from '../molecules/PaymentMethod';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LoadingMessage from '../atoms/LoadingMessage';
import { useState } from 'react';
import DonationService from '../../services/donation-service';
import DonateSuccess from '../molecules/DonateSuccess';
import Alert from '../atoms/Alert';

const donationService = new DonationService();

interface DonateProps {
  campaign: Campaign;
  amount: number;
}

const Donate = ({ campaign, amount }: DonateProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [donateFormData, setDonateFormData] = useState<DonateFormValues>();

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleDonate = async (data: DonateFormValues) => {
    setLoading(true);
    setErrorMessage('');
    setDonateFormData(data);
    try {
      const response = await donationService.registerDonation(
        campaign.categoryId,
        campaign.campaignId,
        amount,
        `DOAR${amount}MT${randomInteger(0, 99)}`,
        data.phone,
        data.name,
        data.email,
        data.message
      );

      if (response.registered != undefined && response.registered === true) {
        setSuccess(true);
      } else if (response.code != undefined && response.code === 1000) {
        setErrorMessage(`${response.message.output_ResponseDesc}`);
      } else if (response.message != undefined) {
        setErrorMessage(`${response.message}`);
      } else {
        console.log(response);
        setErrorMessage('Não foi possível processar a transação');
      }
    } catch (err) {
      setErrorMessage(`${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {isSuccess && (
            <div className="max-w-3xl mx-auto">
              <DonateSuccess
                amount={amount}
                phone={donateFormData?.phone}
                name={donateFormData?.name}
                redirectTo={`/c/${campaign.categoryId}/${campaign.campaignId}`}
              />
            </div>
          )}

          {!isSuccess && (
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
                {isLoading && (
                  <LoadingMessage
                    title="Confirme a operação"
                    subtitle="Introduza o PIN no seu telefone para confirmar a operação"
                  />
                )}
                {!isLoading && (
                  <>
                    <DonateForm amount={amount} onDonate={handleDonate} />
                    <div className="h-5"></div>
                    {errorMessage && errorMessage !== '' && (
                      <Alert>
                        <strong className="font-bold">Erro: </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                      </Alert>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Donate;
