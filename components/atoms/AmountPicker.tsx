import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const AmountPicker = () => {
  return (
    <div className="flex items-center">
      <p className="mr-3">Quantia: </p>
      <select className="block appearance-none w-32 bg-white border border-gray-400 hover:border-gray-500 px-4 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option>10 MT </option>
        <option>20 MT </option>
        <option>50 MT </option>
        <option selected>100 MT </option>
        <option>100 MT </option>
        <option>200 MT</option>
        <option>500 MT</option>
        <option>1000 MT</option>
        <option>Outro</option>
      </select>
      <Button size="sm">
        Doar <FontAwesomeIcon icon={faHeart} className="ml-3" />
      </Button>
    </div>
  );
};

export default AmountPicker;
