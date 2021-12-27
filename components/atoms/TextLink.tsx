import Link from 'next/link';

interface TextButtonProps {
  text: string;
  linkName: string;
  href: string;
}

const TextLink = ({ text, linkName, href }: TextButtonProps) => {
  return (
    <div className="text-gray-600 text-center mt-6">
      {text}{' '}
      <Link href="/signin">
        <a className="text-indigo-600 hover:underline transition duration-150 ease-in-out">
          {linkName}
        </a>
      </Link>
    </div>
  );
};

export default TextLink;
