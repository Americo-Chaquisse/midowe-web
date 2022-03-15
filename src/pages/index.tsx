import type { NextPage } from 'next';
import Head from 'next/head';
import { SimpleTemplate } from '../components/templates/simple-template';
import { appName, appSlogan } from '../helpers/constants';
import Welcome from '../features/home/welcome';
import Featured from '../features/home/featured';
import Categories from '../features/home/categories';
import Trending from '../features/home/trending';
import CallToAction from '../features/home/call-to-action';
import HowItWorks from '../features/home/how-it-works';
import Newsletter from '../features/home/newsletter';
import ContactUs from '../features/home/contact-us';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {appName} - {appSlogan}
        </title>
      </Head>
      <SimpleTemplate header={false}>
        <Welcome />
        <Featured />
        <Categories />
        <Trending />
        <CallToAction />
        <HowItWorks />
        <Newsletter />
        <ContactUs />
      </SimpleTemplate>
    </>
  );
};

export default IndexPage;
