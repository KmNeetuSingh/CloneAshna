import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Input,
  Button,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // ✅ useNavigate instead of useHistory
import img from "../assets/asana.png";
import a from "../assets/google.png";
import { toaster, Toaster } from "../components/ui/toaster"; // Import toaster and Toaster component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Correct hook

  const handleLogin = async () => {
    setIsLoading(true);
    const userCredentials = { email, password };

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await res.json();

      if (res.ok) {
        // Use toaster to show a success message
        toaster({
          title: "Login successful",
          description: "You have logged in successfully.",
          type: "success",
          duration: 3000,
          isClosable: true,
        });
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // ✅ Correct method to redirect
      } else {
        // Use toaster to show an error message
        toaster({
          title: "Login failed",
          description: data.message || "Please check your credentials.",
          type: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      // Use toaster to show an error message
      toaster({
        title: "Error",
        description: "An error occurred while logging in.",
        type: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex minH="100vh" direction="column" bg="white">
      {/* Logo at top-left */}
      <Box position="absolute" top="4" left="4">
        <Image src={img} alt="Asana Logo" boxSize="100px" objectFit="contain" />
      </Box>

      {/* Centered Login Box */}
      <Flex flex="1" align="center" justify="center">
        <Box w="full" maxW="md" px={8} py={10} borderRadius="xl" bg="white">
          <Heading fontSize="3xl" mb={2} textAlign="center" color="gray.800">
            Welcome to Asana
          </Heading>
          <Text fontSize="md" color="gray.600" mb={6} textAlign="center">
            To get started, please sign in
          </Text>

          {/* Google Button */}
          <Button
            w="full"
            variant="outline"
            borderColor="gray.300"
            mb={4}
            leftIcon={<Image src={a} alt="Google" boxSize="20px" />}
          >
            Continue with Google
          </Button>

          {/* Custom OR separator */}
          <Flex align="center" gap={2} my={4}>
            <Box flex="1" height="1px" bg="gray.300" />
            <Text fontSize="sm" color="gray.500">
              or
            </Text>
            <Box flex="1" height="1px" bg="gray.300" />
          </Flex>

          {/* Email & Password Login */}
          <VStack spacing={4}>
            <Text fontSize="sm" color="gray.600" mb={1} w="full">
              Login with Email and Password
            </Text>
            <Box w="full">
              <Text fontSize="sm" color="gray.600" mb={1}>
                Email address
              </Text>
              <Input
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box w="full">
              <Text fontSize="sm" color="gray.600" mb={1}>
                Password
              </Text>
              <Input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Button
              bg="rgb(69,115,210)"
              color="white"
              w="full"
              isLoading={isLoading}
              onClick={handleLogin}
            >
              Login
            </Button>
          </VStack>

          {/* Register Link */}
          <Text mt={6} textAlign="center" fontSize="sm">
            New user?{" "}
            <Link
              as={RouterLink}
              to="/register"
              color="blue.500"
              fontWeight="medium"
            >
              Register here
            </Link>
          </Text>
        </Box>
      </Flex>

      {/* Render the Toaster component here to show the toasts */}
      <Toaster />
    </Flex>
  );
};

export default Login;
