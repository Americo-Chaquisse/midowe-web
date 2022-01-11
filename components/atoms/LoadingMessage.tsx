import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LoadingMessageProps {
  title: string;
  subtitle: string;
}

const LoadingMessage = ({ title, subtitle }: LoadingMessageProps) => {
  return (
    <div className="p-10 text-center">
      <div className="text-center flex justify-center">
        <div className="rounded-lg bg-white px-5 py-4 shadow-lg">
          <div className="lds-dual-ring"></div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-3">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default LoadingMessage;
