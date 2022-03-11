import { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
  VStack,
} from '@chakra-ui/react';
import {
  FcAssistant,
  FcDonate,
  FcInspection,
  FcInTransit,
  FcSafe,
} from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function HowItWorks() {
  return (
    <>
      <Container maxW="container.lg" p={20} textAlign="center">
        <Heading color={'purple.600'}>Sem fins lucrativos</Heading>
        <Text mt={5} color={'purple.800'}>
          O Midowe é uma plataforma da comunidade para a comunidade, sem fins
          lucrativos. As taxas minimas cobradas cobrem apenas os custos das
          transações financeiras. Os pilares abaixo são adoptados para manter
          seguro e cómodo todo o processo de angariação de fundos e doação.
        </Text>
      </Container>
      <Container maxW="container.xl" p={20} pt={0} mb={19}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcInspection} w={10} h={10} />}
            title={'Verificação de autenticidade'}
            text={
              'As campanhas de angariação de fundos passam por um processo de verificação onde é feita a validação da autenticidade e veracidade da informação fornecida.'
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Realocação periódica'}
            text={
              'As doações colectadas são enviadas de forma segura e automática para o beneficiario. Após a aplicação do valor colectado é partilhada a evidência do bom uso do mesmo.'
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Denúncias de Fraudes'}
            text={
              'Em caso de suspeitas de fraudes, as campanhas devem ser denunciadas para que seja feita uma investigação apropriada, e se necessário a devolução do valor doado.'
            }
          />
        </SimpleGrid>
      </Container>
    </>
  );
}
