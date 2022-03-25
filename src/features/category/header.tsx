import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CategoryType } from '../../helpers/types';

type HeaderProps = {
  category: CategoryType;
};

export function Header({ category }: HeaderProps) {
  return (
    <Container maxW="container.xl" px={20} pt={20}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          {category && <BreadcrumbLink>{category.name}</BreadcrumbLink>}
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
}
