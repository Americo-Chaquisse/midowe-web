import { httpGet } from './../helpers/httpClient';
import useSWR from 'swr';

function useFeaturedCampaigns() {
  const { data, error } = useSWR('/spotlight/featured', httpGet);

  return {
    campaigns: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function useTrendingCampaigns() {
  const { data, error } = useSWR('/spotlight/trending', httpGet);

  return {
    campaigns: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useFeaturedCampaigns, useTrendingCampaigns };
