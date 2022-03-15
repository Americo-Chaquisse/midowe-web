import { Footer } from '../../layout/footer';
import { Header } from '../../layout/header';

interface SimpleTemplateProps {
  children: JSX.Element | JSX.Element[];
  header?: boolean;
  footer?: boolean;
}

const SimpleTemplate = ({
  children,
  header = true,
  footer = true,
}: SimpleTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {header && <Header />}
      <main className="flex-grow">{children}</main>
      {footer && <Footer />}
    </div>
  );
};
export { SimpleTemplate };
