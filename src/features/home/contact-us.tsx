import { Container, Box, Heading, Text } from '@chakra-ui/react';

export default function ContactUs() {
  return (
    <Container maxW="full" p={20} centerContent overflow="hidden">
      <Box textAlign="center">
        <Heading size="lg">Contacte-nos</Heading>
        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
          Alguma dúvida, crítica, ideia, sugestão, ou quer ajudar de alguma
          forma?
          <br />
          Envie um email para:
        </Text>
        <Text display="inline-block" color="purple.600">
          <a href="mailto:contacto@midowe.co.mz">info@midowe.co.mz</a>
        </Text>
      </Box>
    </Container>
  );
}
