import { Container, Flex, Heading, VStack, Text } from '@chakra-ui/react';
import { FeaturedCard } from '../../components/campaign/featured-card';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { CampaignType } from '../../helpers/types';
import { useCategories } from '../../service/category-service';
import { useFeaturedCampaigns } from '../../service/spotlight-service';

export default function Featured() {
  const { campaigns, isLoading, isError } = useFeaturedCampaigns();
  const { categories } = useCategories();

  return (
    <Container maxW="container.xl" p={20} mt={24} mb={20}>
      <VStack paddingBottom={16} textAlign="center">
        <Heading size="lg">Em destaque</Heading>
        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.600">
          As campanhas de angariação de fundos representam causas que precisam
          de contribuição.
          <br />
          Marcamos algumas que achamos interessante dar uma olhada
        </Text>
      </VStack>
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
