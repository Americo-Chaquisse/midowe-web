import {
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react';
import { TrendingCard } from '../../components/campaign/trending-card';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { CampaignType } from '../../helpers/types';
import { useTrendingCampaigns } from '../../service/spotlight-service';

export default function Trending() {
  const { campaigns, isLoading, isError } = useTrendingCampaigns();

  return (
    <Container maxW="container.xl" p={20} mt={20} mb={24}>
      <VStack paddingBottom={16}>
        <Heading size="lg" textAlign="center">
          Em ascenção
        </Heading>
        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.600">
          Encontre a lista das campanhas que tem ganhado alguma tacção e estão
          em ascenção
        </Text>
      </VStack>
      {campaigns && (
        <SimpleGrid columns={4} columnGap={10} rowGap={10} w="full">
          {campaigns.map((campaign: CampaignType) => {
            return (
              <GridItem colSpan={1} key={campaign.campaignId}>
                <TrendingCard campaign={campaign} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      )}
      {isLoading && <SpinnerCenter />}
      {isError && <ErrorAlert />}
    </Container>
  );
}
