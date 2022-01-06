import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import TitleHeader from '../../../components/atoms/TitleHeader';
import Footer from '../../../components/molecules/Footer';
import Header from '../../../components/molecules/Header';
import CampaignList from '../../../components/organisms/CampaigList';
import SimpleTemplate from '../../../components/templates/SimpleTemplate';
import CampaignService from '../../../services/campaign-service';
import CategoryService from '../../../services/category-service';
import Campaign from '../../../types/campaign';
import Category from '../../../types/category';

const categoryService = new CategoryService();
const campaignService = new CampaignService();

interface CategoryPageProps {
  category: Category;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const [campaigns, setCampains] = useState<Campaign[]>();

  useEffect(() => {
    async function loadCampaigns() {
      const campaignData = await campaignService.getByCategory(category.id);
      setCampains(campaignData);
    }
    loadCampaigns();
  }, [category.id]);

  return (
    <>
      <Head>
        <title>{category.name} - Midowe</title>
      </Head>
      <SimpleTemplate
        header={<Header />}
        body={
          <>
            <section className="bg-gradient-to-b from-gray-100 to-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-30 pb-12 md:pt-32 md:pb-20">
                  <TitleHeader
                    title={category.name}
                    subtitle={category.description}
                    back={true}
                  />
                  <CampaignList campaigns={campaigns} />
                </div>
              </div>
            </section>
          </>
        }
        footer={<Footer />}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = await categoryService.getById(params?.categoryId);

  return {
    props: {
      category,
    },
    revalidate: 60 * 10, //seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: Category[] = await categoryService.getAll();

  const paths = categories.map((item) => ({
    params: { categoryId: item.id },
  }));

  return { paths, fallback: false };
};

export default CategoryPage;