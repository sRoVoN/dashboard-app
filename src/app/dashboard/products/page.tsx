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
import { useGamesQuery } from "../../../hooks/useGamesQuery";

export default function GamesPage() {
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const { data, isLoading, error } = useGamesQuery(page, pageSize);

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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {data?.results.map((game) => (
          <Card key={game.id} borderRadius="xl" overflow="hidden" shadow="md">
            <CardBody p={0}>
              <Image
                src={game.background_image}
                alt={game.name}
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="md" noOfLines={1}>
                  {game.name}
                </Text>

                <Link href={`/dashboard/products/${game.id}`}>
                  <Button mt={3} size="sm" colorScheme="teal" w="full">
                    View Details
                  </Button>
                </Link>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <HStack justify="center" spacing={4}>
        <Button onClick={() => setPage((p) => Math.max(p - 1, 1))} isDisabled={page === 1}>
          Previous
        </Button>

        <Text fontWeight="bold">Page {page}</Text>

        <Button
          onClick={() =>
            setPage((p) => (data && data.results.length === pageSize ? p + 1 : p))
          }
          isDisabled={data && data.results.length < pageSize}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
}
