import { Footer } from '../../layout/footer';

interface SimpleTemplateProps {
  children: JSX.Element | JSX.Element[];
  footer?: boolean;
}

const SimpleTemplate = ({ children, footer = true }: SimpleTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default SimpleTemplate;
