import Link from 'next/link';

interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  altLabelText?: string;
  altLabelLink?: string;
}
const TextInput = ({
  label,
  placeholder = '',
  type = 'text',
  altLabelText = '',
  altLabelLink = '',
}: TextInputProps) => {
  return (
    <div className="w-full px-3">
      <div className="flex justify-between">
        <label
          className="block text-gray-800 text-sm font-medium mb-1"
          htmlFor="name"
        >
          {label} <span className="text-red-600">*</span>
        </label>
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
        className="form-input w-full text-gray-800"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default TextInput;
