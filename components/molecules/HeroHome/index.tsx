import LinkButton from '../../atoms/LinkButton';
import HeroBackground from './HeroBackground';

const HeroHome = () => {
  return (
    <section className="relative">
      <HeroBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Nunca ninguém ficou pobre <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-700">
                por doar
              </span>
              <br />
              <small className="text-sm font-light"> - Anne Frank</small>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Nós tormanos fácil a criação de campanhas de angariação de
                fundos para apoiar iniciativas e causas sociais.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <LinkButton href="/c/register">Criar campanha</LinkButton>
                </div>
                <div>
                  <LinkButton href="/about" theme="secondary">
                    Saber mais
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
