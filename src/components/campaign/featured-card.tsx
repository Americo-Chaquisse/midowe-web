import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  WrapItem,
} from '@chakra-ui/react';
import { CampaignType, CategoryType } from '../../helpers/types';
import Link from 'next/link';

type FeaturedCardProps = {
  campaign: CampaignType;
  categories: CategoryType[] | undefined;
};

export default function FeaturedCard({
  campaign,
  categories,
}: FeaturedCardProps) {
  const getCtegoryName = (categoryId: string) => {
    if (categories != undefined && categories.length > 0) {
      const filtered = categories.filter((item) => item.id === categoryId);
      if (filtered.length > 0) {
        return filtered[0].description;
      }
    }
    return categoryId;
  };

  return (
    <WrapItem
      width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}
      data-aos="fade-up"
    >
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link href={`${campaign.categoryId}/${campaign.campaignId}`} passHref>
            <Image
              transform="scale(1.0)"
              src={campaign.profileImage}
              alt="some text"
              objectFit="cover"
              width="100%"
              height={230}
              transition="0.3s ease-in-out"
              cursor="pointer"
              _hover={{
                transform: 'scale(1.05)',
              }}
            />
          </Link>
        </Box>
        <HStack spacing={2} marginTop={4}>
          <Tag
            size={'md'}
            variant="solid"
            colorScheme="purple"
            cursor="pointer"
          >
            <Link href={campaign.categoryId}>
              {getCtegoryName(campaign.categoryId)}
            </Link>
          </Tag>
        </HStack>
        <Heading fontSize="xl" marginTop="2">
          <Link href={`${campaign.categoryId}/${campaign.campaignId}`}>
            {campaign.title}
          </Link>
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          {trimDescription(campaign.description)}
        </Text>
        <BlogAuthor
          name={campaign.userData.fullName}
          pictureUrl={campaign.userData.pictureUrl}
          date={new Date(campaign.targetDate)}
        />
      </Box>
    </WrapItem>
  );
}

function trimDescription(fullDescription: string) {
  const maxChars = 150;
  if (fullDescription.length > maxChars) {
    return fullDescription.substring(0, maxChars) + '...';
  } else {
    return fullDescription;
  }
}

interface BlogAuthorProps {
  date: Date;
  name: string;
  pictureUrl: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  const nameParts = props.name.split(' ');
  let finalName = props.name;
  if (nameParts.length > 2) {
    finalName = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  }

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.pictureUrl}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{finalName}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
