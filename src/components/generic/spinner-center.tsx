import { Flex, Spinner } from '@chakra-ui/react';

export function SpinnerCenter() {
  return (
    <Flex justifyContent="center" p={10}>
      <Spinner />
    </Flex>
  );
}
