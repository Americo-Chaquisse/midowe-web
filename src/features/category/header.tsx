import { ArrowBackIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { Button, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CategoryType } from '../../helpers/types';

type HeaderProps = {
  category: CategoryType;
};

export function Header({ category }: HeaderProps) {
  const router = useRouter();

  return (
    <Container maxW="container.xl" px={20} pt={20}>
      <Button onClick={() => router.back()} leftIcon={<ArrowBackIcon />}>
        {category.name}
      </Button>
    </Container>
  );
}
