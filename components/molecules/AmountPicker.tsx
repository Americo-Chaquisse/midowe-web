import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

interface AmountPickerProps {
  onPick: (amount: number) => void;
}

const AmountPicker = ({ onPick }: AmountPickerProps) => {
  const amountOptions = [
    '10 MT',
    '20 MT',
    '50 MT',
    '100 MT',
    '200 MT',
    '500 MT',
    '1000 MT',
    'Outro',
  ];
  const [selectedOption, setSelectedOption] = useState(amountOptions[3]);
  const [otherAmount, setOtherAmount] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleDonateClick = () => {
    if (selectedOption === amountOptions[amountOptions.length - 1]) {
      if (otherAmount.trim().length == 0) return;
      if (isNaN(+otherAmount)) {
        //Invalid manual amount
        return;
      }
      onPick(parseInt(otherAmount));
      return;
    }
    onPick(parseInt(selectedOption.split(' ')[0]));
  };

  const getAmountLabel = () => {
    if (selectedOption === amountOptions[amountOptions.length - 1]) {
      if (otherAmount.trim().length == 0) return '';
      if (isNaN(+otherAmount)) return '';
      return otherAmount + ' MT';
    }
    return selectedOption;
  };

  return (
    <div className="flex items-center">
      <p className="mr-3">Quantia: </p>
      <select
        className="block appearance-none w-32 bg-white border border-gray-400 hover:border-gray-500 px-4 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {amountOptions.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
      {selectedOption === amountOptions[amountOptions.length - 1] && (
        <TextInput
          autoFocus={true}
          size="sm"
          placeholder="MT:"
          type="number"
          onChange={(value) => {
            setOtherAmount(value);
          }}
        />
      )}
      <Button size="sm" onClick={handleDonateClick}>
        Doar {getAmountLabel()}
        <FontAwesomeIcon icon={faHeart} className="ml-3" />
      </Button>
    </div>
  );
};

export default AmountPicker;
