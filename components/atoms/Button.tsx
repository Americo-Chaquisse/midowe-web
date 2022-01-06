import { SizeType } from '../../types/base';

interface ButtonProps {
  children: any;
  size?: SizeType;
  onClick?: Function;
  type?: 'submit' | 'reset' | 'button';
}
const Button = ({ children, size, onClick, type = 'button' }: ButtonProps) => {
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
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
