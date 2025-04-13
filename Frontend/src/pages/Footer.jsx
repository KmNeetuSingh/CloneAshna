// src/pages/Footer.jsx
import {
    Box,
    Button,
    Grid,
    Text,
    VStack,
    HStack,
    Link,
    IconButton,
  } from "@chakra-ui/react";
  import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaGlobe,
    FaChevronDown,
  } from "react-icons/fa";
  import { Menu } from "@chakra-ui/react";
  
  const Footer = () => {
    const sections = {
      "New to Asana?": [
        "Product overview",
        "All features",
        "Latest feature release",
        "Pricing",
        "Starter plan",
      ],
      "Use cases": [
        "Campaign management",
        "Content calendar",
        "Creative production",
        "Goal management",
        "Resource planning",
      ],
      Solutions: ["Marketing", "Operations", "IT", "Product", "Sales"],
      Resources: [
        "Help Center",
        "Get support",
        "Asana Academy",
        "Certifications",
        "Forum",
      ],
      Company: ["About us", "Leadership", "Customers", "Careers", "Press"],
    };
  
    return (
      <Box bg="#68002A" color="white" minH="100vh" px={6} py={10}>
        {/* Hero Section */}
        <VStack spacing={6} textAlign="center" justify="center" h="60vh">
          <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
            The only platform that can<br />support your company at any scale
          </Text>
  
          <Button
            size="lg"
            bg="white"
            color="#68002A"
            _hover={{ bg: "#f0e5e5" }}
            borderRadius="full"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="medium"
          >
            Get started
          </Button>
        </VStack>
  
        {/* Footnotes */}
        <Box fontSize="sm" color="white" maxW="6xl" mx="auto" mt={6}>
          <Text mb={2}>
            1. Accurate as of December 2023, includes free and paid users.
          </Text>
          <Text mb={2}>
            2. See the <u>2024 Gartner® Magic Quadrant™ for Collaborative Work Management (CWM)</u>. GARTNER is a registered trademark and service mark of Gartner, Inc. and/or its affiliates in the U.S. and internationally, MAGIC QUADRANT and PEER INSIGHTS are registered trademarks and The GARTNER PEER INSIGHTS CUSTOMERS’ CHOICE badge is a trademark and service mark of Gartner, Inc. and/or its affiliates and is used herein with permission. All rights reserved.
          </Text>
          <Text mb={2}>
            3. See <u>The Forrester Wave™: Collaborative Work Management Tools, Q4 2022 report</u>. The Forrester Wave: Collaborative Work Management Tools, Q4 2022. The Forrester Wave is copyrighted by Forrester Research, Inc. Forrester and Forrester Wave are trademarks of Forrester Research, Inc. The Forrester Wave is a graphical representation of Forrester’s call on a market and is plotted using a detailed spreadsheet with exposed scores, weightings, and comments. Forrester does not endorse any vendor, product, or service depicted in the Forrester Wave. Information is based on best available resources. Opinions reflect judgment at the time and are subject to change.
          </Text>
          <Text>
            4. IDC MarketScape: Worldwide Collaborative Work Management 2023–2024 Vendor Assessment — Uniting Teams, Data, and AI for Flexible Work, Doc #US49434923, December 2023
          </Text>
        </Box>
  
        {/* Footer Section */}
        <Box mt={10} py={10} px={[6, 10, 20]}>
          {/* Top Footer Grid */}
          <Grid
            templateColumns={["1fr", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
            gap={10}
            mb={10}
          >
            {Object.entries(sections).map(([title, links]) => (
              <VStack key={title} align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="sm" color="white">
                  {title}
                </Text>
                {links.map((link) => (
                  <Link key={link} href="#" fontSize="sm" color="white" _hover={{ textDecor: "underline" }}>
                    {link}
                  </Link>
                ))}
              </VStack>
            ))}
          </Grid>
  
          {/* Bottom Footer */}
          <Box
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent="space-between"
            alignItems="center"
            borderTop="1px solid #a43a63"
            pt={6}
            fontSize="sm"
          >
            <Text mb={[4, 0]}>&copy; 2025 Your Company. All rights reserved.</Text>
  
            <HStack spacing={4}>
              {/* Language Switcher */}
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Box cursor="pointer" display="flex" alignItems="center" _hover={{ opacity: 0.8 }}>
                    <HStack spacing={1}>
                      <FaGlobe />
                      <Text>English</Text>
                      <FaChevronDown size={10} />
                    </HStack>
                  </Box>
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content bg="#68002A" color="white" borderColor="whiteAlpha.400">
                    <Menu.Item value="en">English</Menu.Item>
                    <Menu.Item value="es">Español</Menu.Item>
                    <Menu.Item value="de">Deutsch</Menu.Item>
                    <Menu.Item value="fr">Français</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
  
              {/* Social Icons */}
              <HStack spacing={3}>
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  color="white"
                  fontSize="lg"
                />
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  variant="ghost"
                  color="white"
                  fontSize="lg"
                />
                <IconButton
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                  color="white"
                  fontSize="lg"
                />
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  