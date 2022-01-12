import Image from 'next/image';
import mpesaLogoImg from '../../public/mpesa-logo.png';

const PaymentMethod = () => {
  return (
    <div>
      <p className="text-sm text-gray-900">Método de pagamento:</p>

      <div className="flex items-center p-2 mt-2 border-red-200 border rounded-lg">
        <Image
          className="rounded-lg"
          src={mpesaLogoImg}
          width={42}
          height={42}
          alt="m-pesa"
        />
        <p className="ml-5 text-red-600">M-Pesa</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
