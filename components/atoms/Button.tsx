import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeType } from '../../types/base';

interface ButtonProps {
  children: any;
  size?: SizeType;
  onClick?: Function;
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
}
const Button = ({
  children,
  size,
  onClick,
  type = 'button',
  loading = false,
}: ButtonProps) => {
  const getSizeClass = () => (size === 'sm' ? 'btn-sm' : '');

  return (
    <div className="w-full px-3">
      <button
        className={`btn ${getSizeClass()} text-white bg-indigo-600 hover:bg-indigo-700 w-full disabled:bg-indigo-300`}
        onClick={() => {
          if (onClick != undefined) {
            onClick();
          }
        }}
        type={type}
        disabled={loading}
      >
        {!loading && children}
        {loading && (
          <span>
            <FontAwesomeIcon icon={faCircleNotch} spin={true} />
            <span className="invisible">.</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
