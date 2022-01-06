import Link from 'next/link';

interface TextAreaProps {
  label: string;
  placeholder?: string;
  altLabelText?: string;
  altLabelLink?: string;
  required?: boolean;
  register?: any;
}
const TextArea = ({
  label,
  placeholder = '',
  altLabelText = '',
  altLabelLink = '',
  required = false,
  register,
}: TextAreaProps) => {
  return (
    <div className="w-full px-3">
      <div className="flex justify-between">
        <label
          className="block text-gray-800 text-sm font-medium mb-1"
          htmlFor="name"
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        {altLabelLink && (
          <Link href={altLabelLink}>
            <a className="text-sm font-medium text-indigo-600 hover:underline">
              {altLabelText}
            </a>
          </Link>
        )}
      </div>
      <textarea
        id="name"
        className="form-input w-full text-gray-800"
        placeholder={placeholder}
        required={required}
        {...register}
      />
    </div>
  );
};
export default TextArea;
