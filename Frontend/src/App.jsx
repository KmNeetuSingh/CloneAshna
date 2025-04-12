// Demo.jsx
import { Button, HStack } from "@chakra-ui/react";

const App = () => {
  return (
    <HStack spacing={4}>
      <Button colorScheme="black">Click me</Button>
      <Button colorScheme="blue">Click me</Button>
    </HStack>
  );
};

export default App;