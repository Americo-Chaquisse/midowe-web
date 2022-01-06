import Link from 'next/link';
import { SizeType, ThemeType } from '../../types/base';

interface LinkButtonProps {
  href: string;
  children: string;
  theme?: ThemeType;
  icon?: JSX.Element;
  size?: SizeType;
}

const LinkButton = ({
  href,
  children,
  theme = 'primary',
  icon,
  size,
}: LinkButtonProps) => {
  const getThemeClass = () => {
    switch (theme) {
      case 'primary':
        return 'btn text-white bg-indigo-600 hover:bg-indigo-700';
      case 'secondary':
        return 'btn text-gray-200 bg-gray-900 hover:bg-gray-800';
      case 'tertiary':
        return 'px-5 py-3 text-gray-600 hover:text-gray-900';
      case 'outline':
        return 'btn text-indigo-600 border-indigo-200 hover:border-indigo-600';
    }
  };

  const getSizeClass = () => (size === 'sm' ? 'btn-sm' : '');

  return (
    <Link href={href}>
      <a
        className={`font-medium ${getThemeClass()} ${getSizeClass()} w-full sm:w-auto`}
      >
        {children}
        {icon}
      </a>
    </Link>
  );
};

export default LinkButton;
