interface LabelProps {
  children: any;
}
const Label = ({ children }: LabelProps) => {
  return <div className="text-sm text-gray-500 text-center">{children}</div>;
};

export default Label;
