import { faFolderOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkButton from '../atoms/LinkButton';

const EmptyCampaigns = () => {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        icon={faFolderOpen}
        size="4x"
        className="text-indigo-300"
      />
      <h1 className="my-6 text-gray-500 text-xl">
        Não foi encontrada nenhuma campanha
      </h1>
      <LinkButton theme="outline" size="sm" href="/u/campaigns/add">
        Criar campanha &nbsp;
        <FontAwesomeIcon icon={faPlus} />
      </LinkButton>
    </div>
  );
};

export default EmptyCampaigns;
