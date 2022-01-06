import Link from 'next/link';
import { SizeType } from '../../types/base';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  altLabelText?: string;
  altLabelLink?: string;
  size?: SizeType;
  autoFocus?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}
const TextInput = ({
  label,
  placeholder = '',
  type = 'text',
  altLabelText = '',
  altLabelLink = '',
  size = 'md',
  autoFocus = false,
  required = true,
  onChange,
}: TextInputProps) => {
  const getSizeClass = () => (size === 'sm' ? 'input-sm' : '');

  return (
    <div className="w-full px-3">
      <div className="flex justify-between">
        {label && (
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="name"
          >
            {label} {required && <span className="text-red-600">*</span>}
          </label>
        )}
        {altLabelLink && (
          <Link href={altLabelLink}>
            <a className="text-sm font-medium text-indigo-600 hover:underline">
              {altLabelText}
            </a>
          </Link>
        )}
      </div>
      <input
        id="name"
        type={type}
        className={`form-input w-full ${getSizeClass()} text-gray-800`}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        onChange={(e) => {
          if (onChange != undefined) {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
};
export default TextInput;
