interface TextLineSeparatorProps {
  label: string;
}
const TextLineSeparator = ({ label }: TextLineSeparatorProps) => {
  return (
    <div className="flex items-center my-6">
      <div
        className="border-t border-gray-300 flex-grow mr-3"
        aria-hidden="true"
      ></div>
      <div className="text-gray-600 italic">{label}</div>
      <div
        className="border-t border-gray-300 flex-grow ml-3"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default TextLineSeparator;
