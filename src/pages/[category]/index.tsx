import Head from 'next/head';
import { useState } from 'react';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { SimpleTemplate } from '../../components/templates/simple-template';
import { CampaignItems } from '../../features/category/campaign-items';
import { Header } from '../../features/category/header';
import { appName } from '../../helpers/constants';
import { useCategoryById } from '../../service/category-service';
import { GetServerSideProps } from 'next';

type CategoryPageProps = {
  categoryId: string;
};

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const { category, isLoading, isError } = useCategoryById(categoryId);

  return (
    <>
      <Head>
        <title>
          {category && category.name} - {appName}
        </title>
      </Head>
      <SimpleTemplate>
        {category && <Header category={category} />}
        {isLoading && <SpinnerCenter />}
        {isError && <ErrorAlert />}

        {category && <CampaignItems categoryId={categoryId} />}
      </SimpleTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      categoryId: params?.category,
    },
  };
};
