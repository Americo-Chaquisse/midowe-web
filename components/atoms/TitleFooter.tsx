import Link from 'next/link';

interface TitleFooterProps {
  facebook: string;
  copyNote: JSX.Element;
}

const TitleFooter = ({ facebook, copyNote }: TitleFooterProps) => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:py-8 border-t border-gray-200">
          <ul className="flex md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <Link href={facebook}>
                <a
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>

          <div className="text-sm text-gray-600 mr-4">{copyNote}</div>
        </div>
      </div>
    </footer>
  );
};

export default TitleFooter;
