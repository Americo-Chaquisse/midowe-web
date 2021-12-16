import Link from 'next/link';

interface CardImageTextProps {
  title: string;
  link: string;
  image: string;
  index: number;
  footer?: JSX.Element;
}

const CardImageText = ({
  title,
  link,
  image,
  index,
  footer,
}: CardImageTextProps) => {
  return (
    <Link href={link}>
      <a
        className="group"
        data-aos="zoom-in-up"
        data-aos-delay={150 + 100 * index}
      >
        <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
        {footer}
      </a>
    </Link>
  );
};

export default CardImageText;
