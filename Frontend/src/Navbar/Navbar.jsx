import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Icon,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiChevronDown, FiGlobe } from "react-icons/fi";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/asana.png";

const menuItems = [
  {
    label: "Product",
    sections: {
      Platform: [
        "Product overview",
        "All features",
        "Latest feature release",
        "App integrations",
      ],
      Capabilities: [
        "Project management",
        "Goals and reporting",
        "Asana AI",
        "Workflows and automation",
        "Resource management",
        "Admin and security",
      ],
    },
  },
  {
    label: "Solutions",
    sections: {
      "For Teams": ["Marketing", "Engineering", "Design", "HR"],
    },
  },
  {
    label: "Resources",
    sections: {
      Learn: ["Blog", "Guides", "Webinars", "Community"],
    },
  },
  {
    label: "Pricing",
    sections: null,
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      as="header"
      borderBottom="1px solid #eee"
      px={{ base: 4, md: 10 }}
      pt={0}
      pb={4}
      position="relative"
      bg="white"
    >
      <Flex justify="space-between" align="center" wrap="wrap">
        {/* Left: Logo + Menu */}
        <HStack spacing={4}>
          <Image src={logo} alt="Logo" height="28px" width="auto" />

          <HStack spacing={10} ml={{ base: 2, md: 6 }}>
            {menuItems.map((item) => (
              <Box
                key={item.label}
                position="relative"
                onMouseEnter={() => isDesktop && setActiveMenu(item.label)}
                onMouseLeave={() => isDesktop && setActiveMenu(null)}
                cursor="pointer"
              >
                <HStack spacing={1}>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="gray.700"
                    _hover={{ color: "rgb(104,0,49)" }}
                  >
                    {item.label}
                  </Text>
                  {item.sections && <Icon as={FiChevronDown} fontSize="14px" />}
                </HStack>

                {activeMenu === item.label && item.sections && (
                  <Box
                    position="absolute"
                    top="40px"
                    left={0}
                    bg="white"
                    boxShadow="lg"
                    rounded="md"
                    p={6}
                    zIndex={100}
                    minW="650px"
                  >
                    <Flex gap={12}>
                      {Object.entries(item.sections).map(([sectionTitle, links]) => (
                        <Box key={sectionTitle} mr={8}>
                          <Text
                            fontWeight="bold"
                            mb={2}
                            fontSize="sm"
                            color="gray.600"
                            _hover={{ color: "rgb(104,0,49)", cursor: "pointer" }}
                          >
                            {sectionTitle.toUpperCase()}
                          </Text>
                          <VStack align="start" spacing={2}>
                            {links.map((link) => (
                              <Text
                                key={link}
                                fontSize="sm"
                                cursor="pointer"
                                _hover={{ color: "rgb(104,0,49)" }}
                              >
                                {link}
                              </Text>
                            ))}
                          </VStack>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                )}
              </Box>
            ))}
          </HStack>
        </HStack>

        {/* Right Side */}
        <HStack spacing={5} ml={{ base: 0, md: 6 }}>
          <Icon as={FiGlobe} color="gray.500" boxSize={4} />
          <Text
            fontSize="sm"
            color="gray.600"
            cursor="pointer"
            _hover={{ color: "rgb(104,0,49)" }}
          >
            Contact sales
          </Text>
          <RouterLink to="/login">
            <Text
              fontSize="sm"
              color="gray.600"
              cursor="pointer"
              _hover={{ color: "rgb(104,0,49)" }}
            >
              Log In
            </Text>
          </RouterLink>
          <RouterLink to="/register">
            <Button bg="black" color="white" size="sm" _hover={{ bg: "rgb(104,0,49)" }}>
              Get started
            </Button>
          </RouterLink>
        </HStack>
      </Flex>
    </Box>
  );
}
