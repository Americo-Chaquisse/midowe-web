import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../atoms/Button';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';
import TextLineSeparator from '../atoms/TextLineSeparator';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface DonateFormValues {
  phone: number;
  email: string;
  name: string;
  message: string;
}

interface DonateFormProps {
  amount: number;
  onDonate: (data: DonateFormValues) => void;
}

const DonateForm = ({ amount, onDonate }: DonateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonateFormValues>();

  const onSubmit: SubmitHandler<DonateFormValues> = (data) => onDonate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          label="Telefone (84/85)"
          type="number"
          placeholder="Número de telefone com M-Pesa"
          register={register('phone', {
            required: true,
            minLength: 9,
            maxLength: 9,
            pattern: /^(84|85)/i,
          })}
        />
        {errors.phone && (
          <span className="text-xs text-red-600 ml-4">
            Formato de telefone não válido
          </span>
        )}
      </div>
      <TextLineSeparator label="Adicionalmente" />
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          type="email"
          label="Email"
          required={false}
          placeholder="Email que iremos enviar o recibo"
          register={register('email')}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          label="Seu nome"
          placeholder="Em branco para doar como anônimo"
          required={false}
          register={register('name')}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextArea
          label="Mensagem de apoio"
          placeholder="Deixe ficar uma mensagem"
          required={false}
          register={register('message')}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <Button type="submit">
          Efectuar a doação de {amount} MT
          <FontAwesomeIcon icon={faHeart} className="ml-3" />
        </Button>
      </div>
    </form>
  );
};

export default DonateForm;
