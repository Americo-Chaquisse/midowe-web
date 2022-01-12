import Image from 'next/image';
import LinkButton from '../atoms/LinkButton';
import thankYouImg from '../../public/hands-holding-words-thank-you.png';

interface DonateSuccessProps {
  amount: number;
  phone?: number;
  name?: string;
  redirectTo: string;
}

const DonateSuccess = ({
  amount,
  phone,
  name,
  redirectTo,
}: DonateSuccessProps) => {
  return (
    <div className="w-3/4 mx-auto text-center">
      <Image
        src={thankYouImg}
        width={600}
        height={200}
        alt=""
        className="rounded-lg"
      />
      <h1 className="text-indigo-600 text-3xl font-bold my-5">
        Recebemos a sua doação!
      </h1>
      <h3 className="font-bold text-lg">Quantia: {amount} MT</h3>
      <p className="text-sm mt-5">Método de pagamento: M-Pesa</p>
      <p className="text-sm">Número: {phone}</p>
      <p className="text-sm mb-5">Nome: {name}</p>
      <LinkButton size="sm" theme="outline" href={redirectTo}>
        Ir para a página da campanha
      </LinkButton>
    </div>
  );
};

export default DonateSuccess;
