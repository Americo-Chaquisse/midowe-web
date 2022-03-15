import { Alert, AlertIcon, Container, SimpleGrid } from '@chakra-ui/react';
import { TrendingCard } from '../../components/campaign/trending-card';
import { ErrorAlert } from '../../components/generic/error-alert';
import { LoadMore } from '../../components/generic/load-more';
import { CampaignType } from '../../helpers/types';
import { useCampaignsByCategory } from '../../service/campaign-service';

type CampaignItemsProps = {
  categoryId: string;
};
export function CampaignItems({ categoryId }: CampaignItemsProps) {
  const perPage: number = 12;
  const { campaigns, isLoading, isError, size, setSize } =
    useCampaignsByCategory(categoryId, perPage);

  const getTotalItems = () => {
    if (!campaigns) return 0;
    let totalItems = 0;
    campaigns.forEach((page) => (totalItems += page.length));
    return totalItems;
  };
  const displayLoadMore = () => {
    if (size === 0) return true;
    if (!campaigns || campaigns.length === 0) return true;

    let totalItems = getTotalItems();
    if (totalItems === size * perPage) {
      return true;
    }

    return false;
  };

  return (
    <Container maxW="container.xl" p={20}>
      <SimpleGrid columns={4} columnGap={10} rowGap={10} w="full">
        {campaigns &&
          campaigns.map((page: CampaignType[]) => {
            return page.map((campaign: CampaignType) => {
              return (
                <TrendingCard key={campaign.campaignId} campaign={campaign} />
              );
            });
          })}
      </SimpleGrid>

      {campaigns && getTotalItems() === 0 && (
        <Alert status="info">
          <AlertIcon />
          Ops! Nenhuma campanha nesta categoria
        </Alert>
      )}

      {isError && <ErrorAlert />}

      {displayLoadMore() && (
        <LoadMore
          isLoading={isLoading}
          onLoadRequest={() => setSize(size + 1)}
        />
      )}
    </Container>
  );
}
