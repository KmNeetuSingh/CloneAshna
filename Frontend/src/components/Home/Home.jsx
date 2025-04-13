import {
    Box,
    Text,
    Heading,
    Button,
    Stack,
    Flex,
    Icon,
    useBreakpointValue,
    Image,
    SimpleGrid,
    HStack,
  } from "@chakra-ui/react";
  import { FiVolume2, FiArrowRight } from "react-icons/fi";
  import { useRef } from "react";
  import { useNavigate } from "react-router-dom";
  
  // Logo imports
  import amazonLogo from "../../assets/amazon.webp";
  import accentureLogo from "../../assets/accenture.webp";
  import johnsonLogo from "../../assets/JJ.webp";
  import delllogo from "../../assets/dell.webp";
  import merckLogo from "../../assets/merck.webp";
  
  export default function Home() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const navigate = useNavigate();
    const videoRef = useRef(null);
  
    const handleViewDemo = () => {
      videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  
    return (
      <>
        {/* Hero Section */}
        <Box bg="#fdebed" py={{ base: 20, md: 28 }} px={{ base: 4, md: 8 }} textAlign="center">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} color="#4a001f" fontWeight="semibold">
            Where work connects
          </Heading>
  
          <Text
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            color="#4a001f"
            maxW="3xl"
            mx="auto"
          >
            Connect work to goals and automate workflows with AI as your teammate.
          </Text>
  
          <Stack direction="row" justify="center" mt={8} spacing={6} flexWrap="wrap">
            <Button
              bg="#4a001f"
              color="white"
              _hover={{ bg: "#3a0019" }}
              rounded="full"
              px={8}
              py={6}
              fontSize="md"
              onClick={() => navigate("/register")}
            >
              Get started
            </Button>
            <Button
              variant="outline"
              borderColor="#4a001f"
              color="#4a001f"
              _hover={{ bg: "whiteAlpha.600" }}
              rounded="full"
              px={8}
              py={6}
              fontSize="md"
              onClick={handleViewDemo}
            >
              View demo
            </Button>
          </Stack>
        </Box>
  
        {/* YouTube Video Section */}
        <Box w="100%" display="flex" justifyContent="center" px={{ base: 4, md: 10 }}>
          <Box
            ref={videoRef}
            bg="#6a0032"
            borderRadius="2xl"
            py={{ base: 8, md: 12 }}
            px={{ base: 4, md: 8 }}
            w="100%"
            maxW="6xl"
          >
            <Flex direction="column" align="center" justify="center" w="100%">
              <Box w="100%">
                <Box
                  position="relative"
                  width="100%"
                  paddingTop="40%"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                >
                  <Box
                    as="iframe"
                    src="https://www.youtube.com/embed/hcY-2Xux2oI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                  />
                  <Icon
                    as={FiVolume2}
                    color="black"
                    bg="white"
                    borderRadius="full"
                    boxSize={6}
                    position="absolute"
                    top={3}
                    right={3}
                    p={1}
                    boxShadow="md"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
  
        {/* Trusted by Companies Section */}
        <Box bg="white" py={{ base: 12, md: 20 }} px={{ base: 4, md: 10 }} maxW="7xl" mx="auto">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 8, md: 16 }}
            textAlign={{ base: "center", md: "left" }}
            mb={10}
          >
            <Box flex={{ base: "1", md: "0.5" }} maxW={{ base: "100%", md: "400px" }}>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="medium"
                color="black"
                mb={4}
                lineHeight="1.2"
              >
                85% of Fortune 100 companies choose Asana<sup>1</sup>
              </Text>
            </Box>
  
            <Flex
              flex="1"
              wrap="nowrap"
              overflowX={{ base: "auto", md: "visible" }}
              whiteSpace="nowrap"
              justify={{ base: "flex-start", md: "space-between" }}
              align="center"
              gap={{ base: 8, md: 10 }}
              px={{ base: 2, md: 0 }}
            >
              {[amazonLogo, accentureLogo, johnsonLogo, delllogo, merckLogo].map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo}
                  alt={`Logo ${idx}`}
                  h={{ base: "28", md: "36" }}
                  minW={{ base: "100px", md: "140px" }}
                  objectFit="contain"
                  filter="grayscale(100%)"
                  transition="all 0.3s ease"
                  _hover={{
                    filter: "grayscale(0%)",
                    transform: "scale(1.05)",
                  }}
                />
              ))}
            </Flex>
          </Flex>
  
          <Flex direction="row" align={{ base: "center", md: "flex-start" }}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              color="black"
              textAlign={{ base: "center", md: "left" }}
              w={{ base: "100%", md: "50%" }}
              lineHeight={{ base: "1.4", md: "1.2" }}
            >
              See how Asana keeps work moving across use cases
            </Heading>
          </Flex>
        </Box>
  
        {/* Features Section */}
        <Box pt={{ base: 2, md: 4 }} pb={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }} bg="gray.50">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 10 }} textAlign="center">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </SimpleGrid>
        </Box>
      </>
    );
  }
  
  // Features data
  const features = [
    {
      title: "Campaign management",
      description: "Plan, track, and complete your campaigns all in one place.",
      link: "See campaign management",
    },
    {
      title: "Creative production",
      description: "Accelerate creative work by automating workflows from start to finish.",
      link: "See creative production",
    },
    {
      title: "Project intake",
      description: "Capture, prioritize, and assign requests automatically so your teams have more time to work.",
      link: "See project intake",
    },
    {
      title: "Product launches",
      description: "Coordinate teams, tasks, and timelines to keep every launch on schedule.",
      link: "See project launches",
    },
    {
      title: "Organizational planning",
      description: "Address business needs quickly by analyzing progress, bandwidth, and blockers on one platform.",
      link: "See organizational planning",
    },
    {
      title: "Resource planning",
      description: "Visualize how teams are staffed and what resources are available across your business.",
      link: "See resource planning",
    },
    {
      title: "Goal management",
      description: "Connect everyone's work to the organizational goals they support.",
      link: "See goal management",
    },
    {
      title: "Employee onboarding",
      description: "Standardize onboarding to help new employees make an impact quickly.",
      link: "See employee onboarding",
    },
  ];
  
  // Updated Feature Card Component
  function FeatureCard({ title, description, link }) {
    return (
        <Box
          bg="white"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
          p={6}
          m={4} // margin on all sides
          transition="all 0.2s ease"
          _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
          textAlign="left"
        >
          <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={4}>
            {title}
          </Heading>
    
          <Text fontSize="md" color="gray.600" mb={6}>
            {description}
          </Text>
    
          {/* Link in a square box */}
          <Box
            color="black"
            borderRadius="md"
            px={4}
            py={3}
            display="inline-flex"
            alignItems="center"
            gap={2}
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{ bg: "gray.800", transform: "scale(1.03)" }}
          >
            <Text fontWeight="medium">{link}</Text>
            <Icon as={FiArrowRight} boxSize={4} />
          </Box>
        </Box>
      );
    
  }
  