import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Container,
  Divider,
  Flex,
  Stack,
  Tag,
} from '@chakra-ui/react';
import { CampaignType } from '../../helpers/types';
import { Heading } from '@chakra-ui/react';
import ImageSlider from '../../components/generic/image-slider';
import Link from 'next/link';
import { useCategoryById } from '../../service/category-service';
import { BiShieldAlt2 } from 'react-icons/bi';
import { SocialButton } from '../../components/generic/social-button';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';
import HTMLRenderer from 'react-html-renderer';
import Disqus from 'disqus-react';
import DonationRequest from './donation-request';
import { appUrl } from '../../helpers/constants';

type CampaignHeroProps = {
  campaign: CampaignType;
};
export default function CampaignHero({ campaign }: CampaignHeroProps) {
  const { category } = useCategoryById(campaign.categoryId);

  const disqusShortname = 'midowe';
  const disqusConfig = {
    url: appUrl,
    identifier: campaign.campaignId,
    title: campaign.title,
  };

  return (
    <Container maxW="container.xl" p={20}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          {category && (
            <BreadcrumbLink as={Link} href={`/${category.id}`}>
              {category.name}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{`Campanha: #${campaign.campaignId}`}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading py={5}>
        {campaign.title}{' '}
        <Tag
          size={'sm'}
          variant="solid"
          colorScheme="blue"
          verticalAlign={'middle'}
        >
          <BiShieldAlt2 style={{ marginRight: ' 5px' }} /> Verificado
        </Tag>
      </Heading>

      <Flex w="full" mt={10}>
        <Box w={'65%'}>
          <ImageSlider
            cards={[campaign.profileImage, ...campaign.additionalImages]}
          />
        </Box>
        <Box pl={10}>
          <DonationRequest />
        </Box>
      </Flex>

      <Flex w={'full'} direction="column" alignItems="center" mt={20} mb={5}>
        <Text color={'gray.700'}>Compartilhar nas redes sociais:</Text>
        <Stack direction={'row'} spacing={6} mt={5}>
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
      </Flex>

      <Stack textAlign={'center'} mt={20} mb={5}>
        <Heading size={'sm'}>Sobre</Heading>
        <Divider />
      </Stack>

      <Container>
        <HTMLRenderer html={campaign.description} />
      </Container>

      <Stack textAlign={'center'} mt={20}>
        <Heading size={'sm'}>Comentários</Heading>
        <Divider />
      </Stack>

      <Container mt={16}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Container>
    </Container>
  );
}
