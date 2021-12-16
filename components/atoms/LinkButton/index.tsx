import Link from 'next/link';

type ThemeType = 'primary' | 'secondary' | 'tertiary';
type SizeType = 'sm' | 'md';

interface LinkButtonProps {
  href: string;
  children: string;
  theme?: ThemeType;
  icon?: JSX.Element;
  size?: string;
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
        return 'btn text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3';
      case 'tertiary':
        return 'px-5 py-3 text-gray-600 hover:text-gray-900';
    }
  };

  const getSizeClass = () => (size === 'sm' ? 'btn-sm' : '');

  return (
    <Link href={href}>
      <a
        className={`font-medium ${getThemeClass()} ${getSizeClass()} w-full sm:w-auto sm:ml-4`}
      >
        {children}
        {icon}
      </a>
    </Link>
  );
};

export default LinkButton;
