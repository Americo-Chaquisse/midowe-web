import Image from 'next/image';
import Campaign from '../../types/campaign';

interface CampaignImagesProps {
  campaign: Campaign;
}

const CampaignImages = ({ campaign }: CampaignImagesProps) => {
  return (
    <>
      <div className="w-full aspect-w-1 aspect-h-1 bg-white overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={campaign.profileImage}
          alt={campaign.title}
          width={700}
          height={400}
          className="w-full h-44 object-cover rounded-lg"
        />
      </div>

      <div className="mt-10 mb-5">
        <ul className="flex gap-5 flex-wrap">
          {campaign.additionalImages.map((image) => {
            return (
              <li key={image}>
                <Image
                  src={image}
                  alt=""
                  width={95}
                  height={80}
                  className="object-cover rounded-lg"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CampaignImages;
