import TitleFooter from '../atoms/TitleFooter';

const Footer = () => {
  return (
    <TitleFooter
      facebook="https://facebook.com/midowemz"
      copyNote={
        <>
          <a
            className="text-indigo-600 hover:underline"
            href="https://midowe.co.mz/"
          >
            Midowe
          </a>{' '}
          - {new Date().getFullYear()}. <span className="hidden sm:inline-block">Todos os direitos reservados.</span>
        </>
      }
    />
  );
};

export default Footer;
