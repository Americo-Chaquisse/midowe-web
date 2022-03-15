import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function CallToAction() {
  return (
    <Flex
      w={'full'}
      h={'60vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1556484687-30636164638b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Ideias, sozinhas não são suficientes. Pessoas precisam fazer algo
            para que elas se realizem.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'purple.500'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              Peça ajuda, crie uma campanha
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Ajude! Saiba como contribuir
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
