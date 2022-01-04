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
          - {new Date().getFullYear()}. Todos os direitos reservados.
        </>
      }
    />
  );
};

export default Footer;
