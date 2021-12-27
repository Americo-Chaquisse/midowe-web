interface TitleHeadeProps {
  title: string;
  subtitle?: string;
}

const TitleHeader = ({ title, subtitle }: TitleHeadeProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center pb-10 md:pb-20">
      <h1 className="h2">{title}</h1>
      {subtitle && (
        <p className="text-xl mt-5 font-light text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};
export default TitleHeader;
