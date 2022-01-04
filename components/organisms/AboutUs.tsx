import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import TitleHeader from '../atoms/TitleHeader';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <TitleHeader title="Sobre nós!" />

          <div className="m-auto w-9/12 leading-8 text-justify">
            <p>
              Graças ao poder combinado das tecnologias de informação e
              comunicação, indivíduos, grupos por detrás de iniciativas
              embrionárias e organizações sem fins lucrativos podem
              frequentemente confiar em um grupo de simpatizantes para lhes
              ajudar a resolver um problema que eles enfrentam.
            </p>
            <br />
            <p>
              O midowe é uma aplicação criada para servir de plataforma de
              criação de campanhas de angariação de fundos, divulgação e colecta
              de doações. Usando o midowe é possível recolher por meios de
              pagamento electrónicos as doações, obter estatísticas, e oferecer
              para os doadores o sentimento maior de pertença.
            </p>
            <br />
            <p>
              De modo a reduzir fraudes as campanhas do midowe são verificadas e
              validadas, e os beneficiários das campanhas são convidados a
              prover prova da aplicação do valor recolhido, de forma a
              demonstrar para os doadores os resultados obtidos e mante-los
              ainda mais engajados com a causa.
            </p>
            <br />
            <p>
              Sendo um produto de código-fonte aberto e sem fins lucrativos, o
              midowe é mantido por um grupo de voluntários que dão suporte
              técnico e operacional, sendo que as taxas e comissões cobradas são
              usadas apenas para o suporte e manutenção da plataforma.
            </p>
            <br />
            <p>
              Toda ajuda é bem vinda. Nós estamos a tentar criar uma sociedade
              que as pessoas podem pedir e dar ajuda, sem medo, e com a certeza
              de que a ajuda vai para a causa certa.
            </p>
            <br />
            <p>
              Quer ajudar? Contacte-nos enviando um e-mail para{' '}
              <a className="underline" href="mailto:info@midowe.co.mz">
                info@midowe.co.mz
              </a>
            </p>
            <br />
            <p>
              <Link href="/">
                <a className="text-indigo-600">
                  <FontAwesomeIcon icon={faArrowLeft} /> Voltar para página
                  inicial
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
