import Footer from '../molecules/Footer';
import Header from '../molecules/Header';

interface SimpleTemplateProps {
  children: JSX.Element | JSX.Element[];
  footer?: boolean;
}

const SimpleTemplate = ({ children, footer = true }: SimpleTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      {footer && <Footer />}
    </div>
  );
};
export default SimpleTemplate;
