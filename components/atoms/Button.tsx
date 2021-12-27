interface ButtonProps {
  children: string | JSX.Element;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <div className="w-full px-3">
      <button className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full">
        {children}
      </button>
    </div>
  );
};

export default Button;
