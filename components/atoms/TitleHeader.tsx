import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

interface TitleHeadeProps {
  title: string;
  subtitle?: string;
  back?: boolean;
}

const TitleHeader = ({ title, subtitle, back = false }: TitleHeadeProps) => {
  const router = useRouter();

  return (
    <div className="mx-auto text-center pb-10 flex items-center">
      {back && (
        <div>
          <a
            className="text-indigo-600"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" /> Voltar
          </a>
        </div>
      )}
      <div className="flex-1">
        <h1 className="h2">{title}</h1>
        {subtitle && (
          <p className="text-xl mt-5 font-light text-gray-500">{subtitle}</p>
        )}
      </div>
      {back && <div className="w-16"></div>}
    </div>
  );
};
export default TitleHeader;
