import Link from 'next/link';

interface CardTextPops {
  title: string;
  link: string;
}
const CardText = ({ title, link }: CardTextPops) => {
  return (
    <Link href={link} passHref>
      <div className="bg-slate-100 h-40 rounded-lg flex justify-center items-center hover:opacity-75 hover:cursor-pointer">
        {title}
      </div>
    </Link>
  );
};

export default CardText;
