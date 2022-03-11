import type { NextPage } from 'next';
import Head from 'next/head';
import SiteTemplate from '../components/templates/site-template';
import { appName, appSlogan } from '../helpers/constants';
import Home from '../features/home';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {appName} - {appSlogan}
        </title>
      </Head>
      <SiteTemplate>
        <Home />
      </SiteTemplate>
    </>
  );
};

export default IndexPage;
