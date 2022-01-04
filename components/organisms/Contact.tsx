import ContactForm from '../molecules/ContactForm';

const Contact = () => {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-12">
            <h1 className="h2 mb-4 text-white" data-aos="fade-up">
              Contacte-nos
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Deseja falar connosco? Tem alguma questão, sugestão ou qualquer
              outro assunto? Por favor preencha o formulário abaixo e nós iremos
              prontamente retornar-lhe.
            </p>
          </div>
          <div className="w-6/12 m-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
