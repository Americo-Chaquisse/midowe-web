import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../atoms/Button';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';
import TextLineSeparator from '../atoms/TextLineSeparator';

interface DonateFormProps {
  amount: number;
}

const DonateForm = ({ amount }: DonateFormProps) => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          label="Telefone (84/85)"
          type="number"
          placeholder="Número de telefone com M-Pesa"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          type="email"
          label="Email"
          placeholder="Email que iremos enviar o recibo"
        />
      </div>
      <TextLineSeparator label="Adicionalmente" />
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          label="Seu nome"
          placeholder="Em branco para doar como anônimo"
          required={false}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextArea
          label="Mensagem de apoio"
          placeholder="Deixe ficar uma mensagem"
          required={false}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <Button>
          Efectuar a doação de {amount} MT
          <FontAwesomeIcon icon={faHeart} className="ml-3" />
        </Button>
      </div>
    </form>
  );
};

export default DonateForm;
