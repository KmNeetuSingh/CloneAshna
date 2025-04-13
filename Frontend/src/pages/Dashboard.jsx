// src/pages/Dashboard.jsx
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar"; // or wherever your Navbar (Header) is

export default function Dashboard() {
  return (
    <Box textAlign="center" mt="20px">
      <Navbar />
      Hello, Dashboard!
    </Box>
  );
}
