import Link from 'next/link';

interface SimpleTemplateProps {
  header: JSX.Element;
  body: JSX.Element | JSX.Element[];
}

const SimpleTemplate = ({ header, body }: SimpleTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {header}
      <main className="flex-grow">{body}</main>
    </div>
  );
};
export default SimpleTemplate;
