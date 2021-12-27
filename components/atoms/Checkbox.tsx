interface CheckboxProps {
  label: string;
}
const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div className="w-full px-3">
      <div className="flex justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-gray-600 ml-2">{label}</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
