type SocialType = 'google' | 'facebook';

interface SocialButtonProps {
  type: SocialType;
  label: string;
  onClick?: Function;
}

const SocialButton = ({
  type,
  label,
  onClick = function () {},
}: SocialButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case 'google':
        return (
          <svg
            className="w-4 h-4 fill-current text-red-600 opacity-75 flex-shrink-0 mx-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg
            className="w-4 h-4 fill-current text-blue-800 opacity-75 flex-shrink-0 mx-4"
            viewBox="0 0 16 16"
          >
            <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
          </svg>
        );
    }
  };

  const getClass = () => {
    switch (type) {
      case 'google':
        return 'text-red-600 bg-white hover:border-red-700';
      case 'facebook':
        return 'text-blue-800 bg-blue hover:border-blue-900';
    }
  };

  return (
    <div className="w-full px-3">
      <button
        type="button"
        onClick={() => onClick()}
        className={`btn px-0 ${getClass()} w-full relative flex items-center border-red-600`}
      >
        {getIcon()}
        <span className="flex-auto pl-16 pr-8 -ml-16">{label}</span>
      </button>
    </div>
  );
};

export default SocialButton;
