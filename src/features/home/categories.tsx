import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { CategoryType } from '../../helpers/types';
import { useCategories } from '../../service/category-service';

export default function Categories() {
  const { categories, isLoading, isError } = useCategories();

  return (
    <Container maxW="container.lg" p={10}>
      <Heading size="lg" textAlign="center">
        As campanhas de angariação de fundos encontram-se organizadas em
        categorias
      </Heading>
      {categories && (
        <Flex gap={3} mt={10} justifyContent="center" wrap={'wrap'}>
          {categories.map((category: CategoryType) => {
            return (
              <Link key={category.id} href={`/${category.id}`} passHref>
                <Button variant="outline" borderRadius={20}>
                  {category.name}
                </Button>
              </Link>
            );
          })}
        </Flex>
      )}
      {isLoading && <SpinnerCenter />}
      {isError && <ErrorAlert />}
    </Container>
  );
}
