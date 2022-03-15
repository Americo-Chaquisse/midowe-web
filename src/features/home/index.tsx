import Welcome from './welcome';
import Featured from './featured';
import Categories from './categories';
import Newsletter from './newsletter';
import ContactUs from './contact-us';
import HowItWorks from './how-it-works';
import Trending from './trending';
import CallToAction from './call-to-action';

export default function Home() {
  return (
    <>
      <Welcome />
      <Featured />
      <Categories />
      <Trending />
      <CallToAction />
      <HowItWorks />
      <Newsletter />
      <ContactUs />
    </>
  );
}
