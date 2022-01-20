import Footer from '../molecules/Footer';
import Header from '../molecules/Header';

interface SimpleTemplateProps {
  children: JSX.Element | JSX.Element[];
}

const SimpleTemplate = ({ children }: SimpleTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default SimpleTemplate;
