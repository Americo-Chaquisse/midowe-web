import { Container, Flex } from '@chakra-ui/react';
import FeaturedCard from '../../components/campaign/featured-card';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { CampaignType } from '../../helpers/types';
import { useCategories } from '../../service/category-service';
import { useFeaturedCampaigns } from '../../service/spotlight-service';

export default function Featured() {
  const { campaigns, isLoading, isError } = useFeaturedCampaigns();
  const { categories } = useCategories();

  return (
    <Container maxW="container.xl" p={20} mt={24} mb={19}>
      {campaigns && (
        <Flex gap={10}>
          {campaigns.map((campaign: CampaignType) => {
            return (
              <FeaturedCard
                key={campaign.campaignId}
                campaign={campaign}
                categories={categories}
              />
            );
          })}
        </Flex>
      )}
      {isLoading && <SpinnerCenter />}
      {isError && <ErrorAlert />}
    </Container>
  );
}
