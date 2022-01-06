import { SizeType } from '../../types/base';

interface ButtonProps {
  children: any;
  size?: SizeType;
  onClick?: Function;
}
const Button = ({ children, size, onClick }: ButtonProps) => {
  const getSizeClass = () => (size === 'sm' ? 'btn-sm' : '');

  return (
    <div className="w-full px-3">
      <button
        className={`btn ${getSizeClass()} text-white bg-indigo-600 hover:bg-indigo-700 w-full`}
        onClick={() => {
          if (onClick != undefined) {
            onClick();
          }
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
