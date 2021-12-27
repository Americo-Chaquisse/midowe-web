import Link from 'next/link';

interface BrandingLogoProps {
  imgSrc: string;
  name: string;
  url: string;
}

const BrandingLogo = ({ imgSrc, name, url }: BrandingLogoProps) => {
  return (
    <div className="flex-shrink-0 mr-4">
      <Link href={url}>
        <a className="block" aria-label={name}>
          <img src={imgSrc} className="h-10" alt={name} />
        </a>
      </Link>
    </div>
  );
};

export default BrandingLogo;
