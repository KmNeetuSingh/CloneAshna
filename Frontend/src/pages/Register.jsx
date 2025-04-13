import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import image from "../assets/asana.png";
import { registerUser } from "../api/api"; // ✅ import from centralized API module

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid work email.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      // ✅ Use Axios API function
      await registerUser({ username, email, password });

      toast.success("Registration successful! Redirecting...");
      setTimeout(() => navigate("/tasks"), 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white"
      px={4}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%" }}
      >
        <Box maxW="md" mx="auto" textAlign="center">
          <Image src={image} alt="Asana Logo" mx="auto" mb={4} />

          <Heading size="lg" mb={6} _hover={{ color: "rgb(104,0,49)" }}>
            Start coordinating your work with Asana
          </Heading>

          <Button
            leftIcon={<FcGoogle />}
            width="100%"
            variant="outline"
            mb={4}
            size="lg"
            _hover={{ bg: "gray.100", color: "rgb(104,0,49)" }}
          >
            Continue with your Google work account
          </Button>

          <Flex align="center" mb={4}>
            <Box flex="1" h="1px" bg="gray.300" />
            <Text
              mx={2}
              fontSize="sm"
              color="gray.500"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              OR
            </Text>
            <Box flex="1" h="1px" bg="gray.300" />
          </Flex>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="lg"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.500", bg: "gray.50" }}
              />
              <Input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.500", bg: "gray.50" }}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.500", bg: "gray.50" }}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size="lg"
                bg="white"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.500", bg: "gray.50" }}
              />
              <Button
                type="submit"
                size="lg"
                width="100%"
                colorScheme="blue"
                _hover={{ bg: "rgb(104,0,49)" }}
              >
                Register
              </Button>
            </Stack>
          </form>

          <Text
            mt={6}
            fontSize="xs"
            color="gray.500"
            _hover={{ color: "rgb(104,0,49)", cursor: "pointer" }}
          >
            By signing up, I agree to the Asana{" "}
            <Text
              as="span"
              display="inline"
              color="blue.500"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              Privacy Policy
            </Text>{" "}
            and{" "}
            <Text
              as="span"
              display="inline"
              color="blue.500"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              Terms of Service
            </Text>
            .
          </Text>

          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                borderRadius: "10px",
                background: "#1a202c",
                color: "#fff",
              },
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Register;
