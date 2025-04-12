import React, { useState } from "react";
import {
    Button,
    Input,
    Stack,
    Box,
    Text,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            toast.error("All fields are required.", { duration: 4000 });
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.", { duration: 4000 });
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.", { duration: 4000 });
            return;
        }

        const requestData = {
            username: name,
            email: email,
            password: password,
        };

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to register user.");
            }

            toast.success("Registration Successful. Welcome to the platform!", {
                duration: 4000,
            });
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message || "Error registering user. Please try again.", {
                duration: 4000,
            });
        }
    };

    return (
        <Box
            minH="100vh"
            bgGradient="linear(to-r, blue.400, blue.600)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={4}
            pt={16} // Increased padding-top to lower the content further
        >
            {/* Welcome Message */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.2, 0.8, 0.2, 1], // Smooth ease-in-out
                    delay: 0.2,
                }}
            >
                <Heading as="h1" size="5xl" mb={8} color="black" fontWeight="extrabold">
                    Welcome to Asana Platform!
                </Heading>
            </motion.div>

            {/* Registration Form */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{ width: "100%" }}
            >
                <Box
                    maxW="5xl"
                    mx="auto"
                    p={10}
                    borderRadius="2xl"
                    bg="white"
                    width="100%"
                    minH="650px"
                    mt={6} // Added margin-top to the form to make it further from the top
                >
                    <Heading
                        as="h2"
                        fontSize="3xl"
                        mb={8}
                        textAlign="center"
                        color="rgb(69,115,210)"
                        fontWeight="bold"
                    >
                        Become a Member
                    </Heading>

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={5}>
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                size="lg"
                                isRequired
                                _hover={{ borderColor: "rgb(69,115,210)" }}
                            />

                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address"
                                size="lg"
                                isRequired
                                _hover={{ borderColor: "rgb(69,115,210)" }}
                            />

                            <Input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Your password"
                                size="lg"
                                isRequired
                                _hover={{ borderColor: "rgb(69,115,210)" }}
                            />

                            <Input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                size="lg"
                                isRequired
                                _hover={{ borderColor: "rgb(69,115,210)" }}
                            />

                            <Button
                                type="submit"
                                colorScheme="blue"
                                size="lg"
                                width="full"
                                mt={4}
                                _hover={{ bg: "rgb(69,115,210)" }}
                            >
                                Become a Member
                            </Button>
                        </Stack>

                        <Box textAlign="center" mt={6}>
                            <Text _hover={{ color: "rgb(69,115,210)" }}>
                                Already have an account?{" "}
                                <RouterLink to="/login">
                                    <Button
                                        variant="link"
                                        colorScheme="blue"
                                        _hover={{
                                            color: "rgb(69,115,210)",
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Log in
                                    </Button>
                                </RouterLink>
                            </Text>
                        </Box>
                    </form>

                    {/* Custom Toast for success/error messages */}
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            style: {
                                background: "#1a202c", // Dark blue-gray background
                                color: "#fff",         // White text
                                borderRadius: "12px",
                                padding: "16px",
                                fontSize: "15px",
                            },
                            success: {
                                iconTheme: {
                                    primary: "#48BB78", // Green
                                    secondary: "#fff",
                                },
                            },
                            error: {
                                iconTheme: {
                                    primary: "#F56565", // Red
                                    secondary: "#fff",
                                },
                            },
                        }}
                    />
                </Box>
            </motion.div>
        </Box>
    );
};

export default Register;
