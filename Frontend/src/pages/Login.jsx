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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import img from "../assets/asana.png";
import googleLogo from "../assets/google.png";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion"; // ✅ Animation library

const MotionBox = motion(Box); // ✅ Motion-enhanced Box

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address 📧");
      return;
    }

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
        toast.success("Login successful ✅");
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Login failed. Please check your credentials ❌");
      }
    } catch (err) {
      toast.error("An error occurred while logging in.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex minH="100vh" direction="column" bg="white">
      {/* Logo */}
      <Box position="absolute" top="4" left="4">
        <Image src={img} alt="Asana Logo" boxSize="100px" objectFit="contain" />
      </Box>

      {/* Center Form */}
      <Flex flex="1" align="center" justify="center">
        <MotionBox
          w="full"
          maxW="md"
          px={8}
          py={10}
          borderRadius="xl"
          bg="white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            fontSize="3xl"
            mb={2}
            textAlign="center"
            color="gray.800"
            _hover={{ color: "rgb(104,0,49)" }}
          >
            Welcome to Asana
          </Heading>
          <Text
            fontSize="md"
            color="gray.600"
            mb={6}
            textAlign="center"
            _hover={{ color: "rgb(104,0,49)" }}
          >
            To get started, please sign in
          </Text>

          {/* Google Login */}
          <Button
            w="full"
            variant="outline"
            borderColor="gray.300"
            mb={4}
            leftIcon={<Image src={googleLogo} alt="Google" boxSize="20px" />}
          >
            Continue with Google
          </Button>

          {/* OR separator */}
          <Flex align="center" gap={2} my={4}>
            <Box flex="1" height="1px" bg="gray.300" />
            <Text
              fontSize="sm"
              color="gray.500"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              or
            </Text>
            <Box flex="1" height="1px" bg="gray.300" />
          </Flex>

          {/* Email & Password */}
          <VStack spacing={4}>
            <Text
              fontSize="sm"
              color="gray.600"
              mb={1}
              w="full"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              Login with Email and Password
            </Text>
            <Box w="full">
              <Text
                fontSize="sm"
                color="gray.600"
                mb={1}
                _hover={{ color: "rgb(104,0,49)" }}
              >
                Email address
              </Text>
              <Input
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (email && !validateEmail(email)) {
                    toast.error("Invalid email format ❌");
                  }
                }}
              />
            </Box>
            <Box w="full">
              <Text
                fontSize="sm"
                color="gray.600"
                mb={1}
                _hover={{ color: "rgb(104,0,49)" }}
              >
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
              _hover={{ bg: "rgb(104,0,49)" }}
            >
              Login
            </Button>
          </VStack>

          {/* Register */}
          <Text
            mt={6}
            textAlign="center"
            fontSize="sm"
            _hover={{ color: "rgb(104,0,49)", cursor: "pointer" }}
          >
            New user?{" "}
            <Link
              as={RouterLink}
              to="/register"
              color="blue.500"
              fontWeight="medium"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              Register here
            </Link>
          </Text>
        </MotionBox>
      </Flex>

      {/* Toast container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: "#2D3748",
            color: "#F7FAFC",
            padding: "12px 16px",
            borderRadius: "8px",
            fontSize: "15px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
          },
          success: {
            iconTheme: {
              primary: "#38A169",
              secondary: "#F7FAFC",
            },
          },
          error: {
            iconTheme: {
              primary: "#E53E3E",
              secondary: "#F7FAFC",
            },
          },
        }}
      />
    </Flex>
  );
};

export default Login;
