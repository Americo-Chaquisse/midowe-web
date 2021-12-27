import { Campaign } from '../../types/campaign';
import CardImageText from '../atoms/CardImageText';
import FeaturedList from '../molecules/FeaturedList';

interface FeaturedProps {
  campaigns: Campaign[];
}
const Featured = ({ campaigns }: FeaturedProps) => {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4" data-aos="fade-up">
              Destaque
            </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Algumas campanhas são marcadas como destaque porque acreditamos
              que merecem especial atenção. Encontre a lista abaixo.
            </p>
          </div>
        </div>

        <FeaturedList campaigns={campaigns} />
      </div>
    </section>
  );
};

export default Featured;
