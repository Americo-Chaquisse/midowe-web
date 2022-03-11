import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Welcome() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} pt={0} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} data-aos="fade-up">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              data-aos="zoom-y-out"
              data-aos-delay="150"
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '15%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}
            >
              Contribuir
            </Text>
            <br />{' '}
            <Text color={'purple.400'} as={'span'}>
              Para ajudar
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Muitas ideias nunca saiem do papel, por falta de ajuda. Hospitais
            podem ser construidos, pessoas podem ser curadas, vidas podem ser
            salvas, sonhos podem ser realizados, se cada um de nós der o seu
            contributo.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Criar angariação de fundos
            </Button>
            <Button rounded={'full'}>Como funciona?</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          borderBottomLeftRadius={10}
          src={
            'https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
