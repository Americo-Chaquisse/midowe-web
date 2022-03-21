import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Stack,
  Tag,
  VStack,
} from '@chakra-ui/react';
import { CampaignType } from '../../helpers/types';
import { Heading } from '@chakra-ui/react';
import ImageSlider from '../../components/generic/image-slider';
import Link from 'next/link';
import { useCategoryById } from '../../service/category-service';
import { BiRightArrowAlt, BiShieldAlt2 } from 'react-icons/bi';
import { SocialButton } from '../../components/generic/social-button';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

type CampaignHeroProps = {
  campaign: CampaignType;
};
export default function CampaignHero({ campaign }: CampaignHeroProps) {
  const { category } = useCategoryById(campaign.categoryId);

  return (
    <Container maxW="container.xl" p={20}>
      <Flex w="full">
        <Box>
          <Stack alignItems={'start'} mt={8} mr={20}>
            <Heading py={3}>{campaign.title}</Heading>

            <Button
              rounded={'full'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.600',
              }}
              px={10}
              rightIcon={<BiRightArrowAlt style={{ marginLeft: '15px' }} />}
            >
              Doar agora
            </Button>
          </Stack>

          <Stack direction={'row'} spacing={6} mt={10}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'WhatsApp'} href={'#'}>
              <FaWhatsapp />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
          </Stack>

          <HStack mt={8}>
            <Tag size={'md'} variant="solid" colorScheme="green">
              <BiShieldAlt2 style={{ marginRight: ' 5px' }} /> Verificado
            </Tag>

            {category && (
              <Tag size={'md'} cursor="pointer">
                <Link
                  href={`/${campaign.categoryId}`}
                >{`Categoria: ${category.name}`}</Link>
              </Tag>
            )}
          </HStack>
        </Box>
        <Box w={'55%'}>
          <ImageSlider
            cards={[campaign.profileImage, ...campaign.additionalImages]}
          />
        </Box>
      </Flex>

      <p>TODO: Campaign body</p>
    </Container>
  );
}
