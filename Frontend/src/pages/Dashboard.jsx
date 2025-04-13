// src/pages/Dashboard.jsx
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Home from "../components/Home/Home"
import Footer from "../pages/Footer.jsx";
export default function Dashboard() {
  return (
    <Box textAlign="center" mt="20px">
      <Navbar />
      <Home/>
      <Footer/>
      {/* Add more sections or components as needed */}
    </Box>
  );
}
