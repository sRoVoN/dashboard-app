"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fakeUser = {
    username: "user",
    password: "1234",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    if (username === fakeUser.username && password === fakeUser.password) {
      router.push("/dashboard");
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      p={4}
    >
      <Box bg="white" p={8} borderRadius="md" boxShadow="md" w="full" maxW="sm">
        <VStack spacing={6} as="form" onSubmit={handleSubmit}>
          <Heading size="lg">Login</Heading>

          {/* Username */}
          <FormControl isInvalid={!!error && !username}>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          {/* Password */}
          <FormControl isInvalid={!!error && !password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {/* نمایش خطا */}
          {error && <FormErrorMessage>{error}</FormErrorMessage>}

          <Button type="submit" colorScheme="teal" w="full">
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
