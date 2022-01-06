import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LoadingMessageProps {
  title: string;
  subtitle: string;
}

const LoadingMessage = ({ title, subtitle }: LoadingMessageProps) => {
  return (
    <div className="p-10 text-center">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      <h1 className="text-3xl font-bold mt-3">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default LoadingMessage;
