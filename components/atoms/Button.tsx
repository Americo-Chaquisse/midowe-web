interface ButtonProps {
  children: any;
  size?: string;
}
const Button = ({ children, size }: ButtonProps) => {
  const getSizeClass = () => (size === 'sm' ? 'btn-sm' : '');

  return (
    <div className="w-full px-3">
      <button
        className={`btn ${getSizeClass()} text-white bg-indigo-600 hover:bg-indigo-700 w-full`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
