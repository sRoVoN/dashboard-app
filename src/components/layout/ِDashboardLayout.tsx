"use client";

import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Heading,
  Divider,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex minH="100vh" bg={bg}>
      {/* Sidebar */}
      <Box
        w={isSidebarOpen ? 60 : 16}
        bg="teal.600"
        color="white"
        p={4}
        transition="width 0.2s"
      >
        <VStack align="stretch" spacing={4}>
          <HStack justifyContent={isSidebarOpen ? "space-between" : "center"}>
            {isSidebarOpen && <Heading size="md">Dashboard</Heading>}
            <IconButton
              aria-label="Toggle sidebar"
              icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
              size="sm"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            />
          </HStack>

          <Divider borderColor="teal.300" />

          <VStack align="stretch" spacing={2}>
            <Link href="/dashboard/products">
              <Button
                variant="ghost"
                justifyContent={isSidebarOpen ? "flex-start" : "center"}
                colorScheme="teal"
              >
                Products
              </Button>
            </Link>

            <Link href="/dashboard/users">
              <Button
                variant="ghost"
                justifyContent={isSidebarOpen ? "flex-start" : "center"}
                colorScheme="teal"
              >
                Users
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Box>

      {/* Main content */}
      <Box flex="1" p={6}>
        {children}
      </Box>
    </Flex>
  );
}
