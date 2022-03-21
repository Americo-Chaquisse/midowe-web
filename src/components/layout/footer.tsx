import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import midoweImg from '../../../public/midowe.png';
import { ReactNode } from 'react';
import { appName } from '../../helpers/constants';
import Image from 'next/image';
import Link from 'next/link';
import { SocialButton } from '../generic/social-button';

const Footer = () => {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image
          src={midoweImg}
          className="h-10"
          width={110}
          height={37}
          alt={appName}
        />
        <Stack direction={'row'} spacing={6} fontSize={12}>
          <Link href="/about">Sobre</Link>
          <Link href="/terms">Termos e Condições</Link>
          <Link href="/privacy">Politica de Privacidade</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {new Date().getFullYear()} Midowe</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export { Footer };
