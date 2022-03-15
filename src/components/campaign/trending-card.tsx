import React from 'react';
import { Box, Heading, Image, HStack, Progress, Badge } from '@chakra-ui/react';
import { CampaignType } from '../../helpers/types';
import Link from 'next/link';

type FeaturedCardProps = {
  campaign: CampaignType;
};

export function TrendingCard({ campaign }: FeaturedCardProps) {
  const getPercent = () => {
    let min = 0;
    let max = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const cardPercent = getPercent();

  return (
    <Box w="100%">
      <Box borderRadius="lg" overflow="hidden">
        <Link href={`${campaign.categoryId}/${campaign.campaignId}`} passHref>
          <Image
            transform="scale(1.0)"
            src={campaign.profileImage}
            alt="some text"
            objectFit="cover"
            width="100%"
            height={180}
            transition="0.3s ease-in-out"
            cursor="pointer"
            _hover={{
              transform: 'scale(1.05)',
            }}
          />
        </Link>
      </Box>
      <HStack spacing={5} marginTop={5}>
        <Progress
          value={cardPercent}
          size="xs"
          colorScheme={cardPercent > 60 ? 'purple' : 'pink'}
          flex={1}
        />
        <Badge variant="outline" colorScheme="green">
          {cardPercent}%
        </Badge>
      </HStack>
      <Heading fontSize="md" marginTop="2" fontWeight={600}>
        <Link href={`${campaign.categoryId}/${campaign.campaignId}`}>
          {campaign.title}
        </Link>
      </Heading>
    </Box>
  );
}
