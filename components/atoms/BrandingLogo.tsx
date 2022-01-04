import Link from 'next/link';
import Image from 'next/image';

interface BrandingLogoProps {
  imgSrc: StaticImageData;
  name: string;
  url: string;
}

const BrandingLogo = ({ imgSrc, name, url }: BrandingLogoProps) => {
  return (
    <div className="flex-shrink-0 mr-4">
      <Link href={url}>
        <a className="block" aria-label={name}>
          <Image
            src={imgSrc}
            className="h-10"
            width={110}
            height={37}
            alt={name}
          />
        </a>
      </Link>
    </div>
  );
};

export default BrandingLogo;
