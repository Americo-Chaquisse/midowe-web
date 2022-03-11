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

export { useFeaturedCampaigns };
