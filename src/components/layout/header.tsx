import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { appName } from '../../helpers/constants';
import midoweImg from '../../../public/midowe.png';
import Link from 'next/link';

export function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        align={{ base: 'center', md: 'center' }}
      >
        <Flex justify={{ base: 'center', md: 'space-between' }} w="full">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              <Link href="/" passHref>
                <a style={{ cursor: 'pointer' }}>
                  <Image
                    src={midoweImg}
                    className="h-10"
                    width={110}
                    height={37}
                    alt={appName}
                  />
                </a>
              </Link>
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button colorScheme="black" variant="ghost">
              Entrar
            </Button>
            <Button colorScheme="black">Registar-se</Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4} alignItems={'center'}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Link href={`${navItem.href}`} passHref>
            <Box
              p={2}
              fontSize={'sm'}
              fontWeight={500}
              color={linkColor}
              cursor={'pointer'}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Box>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Destaque',
    href: '#',
  },
  {
    label: 'Em ascenção',
    href: '#',
  },
  {
    label: 'Categorias',
    href: '#',
  },
  {
    label: 'Sobre nós',
    href: '#',
  },
  {
    label: 'Contacte-nos',
    href: '#',
  },
];
