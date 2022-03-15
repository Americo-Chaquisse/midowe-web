import { Box, Button, Flex } from '@chakra-ui/react';

type LoadMoreProps = {
  isLoading: boolean;
  onLoadRequest: () => void;
};

export function LoadMore({ isLoading, onLoadRequest }: LoadMoreProps) {
  return (
    <Flex justifyContent="center" mb={20}>
      <Button onClick={() => onLoadRequest()} isLoading={isLoading}>
        Carregar mais
      </Button>
    </Flex>
  );
}
