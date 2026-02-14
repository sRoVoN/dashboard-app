"use client";

import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Button,
  VStack,
  Spinner,
  Center,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useProductQuery } from "../../../hooks/useProductsQuery";



export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, isLoading, error } = useProductQuery(page, limit);

  if (isLoading)
    return (
      <Center h="60vh">
        <Spinner size="xl" />
      </Center>
    );

  if (error)
    return (
      <Center h="60vh">
        <Text color="red.500">{error.message}</Text>
      </Center>
    );

  return (
    <VStack spacing={8} align="stretch">
      {/* Products Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {data?.products.map((product) => (
          <Card key={product.id} borderRadius="xl" overflow="hidden" shadow="md">
            <CardBody p={0}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="md" noOfLines={1}>
                  {product.title}
                </Text>

                <Link href={`/dashboard/products/${product.id}`}>
                  <Button mt={3} size="sm" colorScheme="teal" w="full">
                    View Details
                  </Button>
                </Link>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {/* Pagination */}
      <HStack justify="center" spacing={4}>
        <Button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          isDisabled={page === 1}
        >
          Previous
        </Button>

        <Text fontWeight="bold">Page {page}</Text>

        <Button
          onClick={() =>
            setPage((p) =>
              p * limit >= (data?.total ?? 0) ? p : p + 1
            )
          }
          isDisabled={page * limit >= (data?.total ?? 0)}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
}
