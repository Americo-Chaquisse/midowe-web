import Welcome from './welcome';
import Featured from './featured';
import Categories from './categories';
import SectionTrending from './section-trending';
import Newsletter from './newsletter';
import ContactUs from './contact-us';
import HowItWorks from './how-it-works';

export default function Home() {
  return (
    <>
      <Welcome />
      <Featured />
      <Categories />
      <SectionTrending />
      <HowItWorks />
      <Newsletter />
      <ContactUs />
    </>
  );
}
