import { httpGet } from './../helpers/httpClient';
import useSWR from 'swr';

function useCategories() {
  const { data, error } = useSWR('/categories', httpGet);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function useCategoryById(categoryId: string) {
  const { data, error } = useSWR(`/categories/${categoryId}`, httpGet);

  return {
    category: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useCategories, useCategoryById };
