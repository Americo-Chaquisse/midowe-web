import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Campaign from '../../types/campaign';

interface CampaignFooterProps {
  campaign: Campaign;
  expand?: boolean;
}

const CampaignFooter = ({ campaign, expand = false }: CampaignFooterProps) => {
  return (
    <div className="mt-2 text-xs font-medium text-indigo-500 flex items-center">
      {expand && (
        <>
          <FontAwesomeIcon icon={faHandsHelping} />
          <p className="pl-1">Objectivo: </p>
          <span className="pr-3 pl-1">200,000 MT</span>
        </>
      )}

      <FontAwesomeIcon icon={faWallet} />
      {expand && <p className="pl-1">Alcançado:</p>}
      <span className="pr-3 pl-1">10%</span>

      <FontAwesomeIcon icon={faCalendar} />
      {expand && <p className="pl-1">Prazo:</p>}
      <span className="pr-3 pl-1">12.Dez</span>

      <FontAwesomeIcon icon={faHeart} />
      <span className="pl-1">{campaign.totalDonations} doações</span>
    </div>
  );
};

export default CampaignFooter;
