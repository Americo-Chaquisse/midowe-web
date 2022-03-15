import { CampaignType } from './../helpers/types';
import useSWRInfinite from 'swr/infinite';
import { httpGet } from '../helpers/httpClient';

function useCampaignsByCategory(categoryId: string, limit: number) {
  const getKey = (
    pageIndex: number,
    previousPageData: CampaignType[] | undefined
  ) => {
    let lastCamapaignId = '';
    if (previousPageData && !previousPageData.length) {
      return null;
    }
    if (previousPageData) {
      lastCamapaignId =
        previousPageData[previousPageData?.length - 1].campaignId;
    }
    return `/campaigns/${categoryId}?limit=${limit}&lastCampaignId=${lastCamapaignId}`; // SWR key
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, httpGet);

  return {
    campaigns: data,
    isLoading: !error && !data,
    isError: error,
    size,
    setSize,
  };
}

export { useCampaignsByCategory };
