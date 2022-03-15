import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { ErrorAlert } from '../../components/generic/error-alert';
import { SpinnerCenter } from '../../components/generic/spinner-center';
import { CategoryType } from '../../helpers/types';
import { useCategories } from '../../service/category-service';

export default function Categories() {
  const { categories, isLoading, isError } = useCategories();

  return (
    <Flex
      w={'full'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Container maxW="container.lg" p={20}>
        <Heading size="lg" textAlign="center">
          As campanhas de angariação de fundos encontram-se organizadas em
          categorias
        </Heading>
        {categories && (
          <Flex gap={3} mt={10} justifyContent="center" wrap={'wrap'}>
            {categories.map((category: CategoryType) => {
              return (
                <Link key={category.id} href={`/${category.id}`} passHref>
                  <Button borderRadius={20}>{category.name}</Button>
                </Link>
              );
            })}
          </Flex>
        )}
        {isLoading && <SpinnerCenter />}
        {isError && <ErrorAlert />}
      </Container>
    </Flex>
  );
}
