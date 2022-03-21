import { CampaignType } from './../helpers/types';
import useSWRInfinite from 'swr/infinite';
import { httpGet } from '../helpers/httpClient';
import useSWR from 'swr';

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

function useCampaignById(categoryId: string, campaignId: string) {
  const { data, error } = useSWR(
    `/campaigns/${categoryId}/${campaignId}`,
    httpGet
  );

  return {
    campaign: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useCampaignsByCategory, useCampaignById };
