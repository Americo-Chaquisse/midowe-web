import Donation from '../../types/donation';

interface DonationItemProps {
  donation: Donation;
}
const DonationItem = ({ donation }: DonationItemProps) => {
  return (
    <div className="border px-3 py-2 rounded-md flex">
      <div className="w-32 text-center">
        <p className="text-xl mt-1.5 text-indigo-600">{donation.amount} MT</p>
      </div>
      <div className="ml-2 flex flex-col flex-1">
        <div className="flex justify-between">
          <p className="text-sm">
            {donation.userName.length > 0 && (
              <span>Doador: {donation.userName}</span>
            )}
          </p>
          <p className="text-sm text-gray-700">{donation.createtAt}</p>
        </div>
        {donation.message.length > 0 && (
          <p className="text-sm">Mensagem: {donation.message}</p>
        )}
      </div>
    </div>
  );
};

export default DonationItem;
