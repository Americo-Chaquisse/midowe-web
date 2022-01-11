import Image from 'next/image';

interface AvatarNamedProps {
  picture: string;
  name: string;
  headline: string;
}
const AvatarNamed = ({ picture, name, headline }: AvatarNamedProps) => {
  return (
    <div className="flex items-center">
      <div>
        <Image
          src={picture}
          alt={name}
          width={60}
          height={60}
          className="w-44 h-44 object-cover rounded-full"
        />
      </div>
      <div className="ml-5">
        <p>{name}</p>
        <p className="text-sm">{headline}</p>
      </div>
    </div>
  );
};

export default AvatarNamed;
