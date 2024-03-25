import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Flex, Input, Image, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const renderLoginPage = () => (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" backgroundImage="url('https://example.com/shpins-logo.jpg')" backgroundSize="cover" backgroundPosition="center">
      <Box backgroundColor="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md" boxShadow="lg">
        <Heading as="h1" size="xl" mb={8}>
          Welcome to Shpins
        </Heading>
        <Box width="300px">
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} mb={4} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mb={4} />
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Box>
      <Box width="300px">
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} mb={4} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mb={4} />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Flex>
  );

  const renderVehiclesPage = () => (
    <Box p={8} backgroundColor="gray.100">
      <Heading as="h1" size="xl" mb={8} color="blue.600">
        Available Vehicles in Mombasa
      </Heading>
      <Stack spacing={8}>
        <Box backgroundColor="white" p={6} borderRadius="md" boxShadow="md">
          <Image src="https://example.com/car.jpg" alt="Car" mb={4} borderRadius="md" />
          <Heading as="h2" size="lg" color="blue.600">
            Sedan
          </Heading>
          <Text fontSize="xl" fontWeight="bold" color="green.600">Price: KES 5,000 per day</Text>
        </Box>
        <Box backgroundColor="white" p={6} borderRadius="md" boxShadow="md">
          <Image src="https://example.com/motorbike.jpg" alt="Motorbike" mb={4} borderRadius="md" />
          <Heading as="h2" size="lg" color="blue.600">
            Motorbike
          </Heading>
          <Text fontSize="xl" fontWeight="bold" color="green.600">Price: KES 2,000 per day</Text>
        </Box>
        <Box backgroundColor="white" p={6} borderRadius="md" boxShadow="md">
          <Image src="https://example.com/plane.jpg" alt="Plane" mb={4} borderRadius="md" />
          <Heading as="h2" size="lg" color="blue.600">
            Plane
          </Heading>
          <Text fontSize="xl" fontWeight="bold" color="green.600">Price: KES 50,000 per hour</Text>
        </Box>
        <Box backgroundColor="white" p={6} borderRadius="md" boxShadow="md">
          <Image src="https://example.com/yacht.jpg" alt="Yacht" mb={4} borderRadius="md" />
          <Heading as="h2" size="lg" color="blue.600">
            Yacht
          </Heading>
          <Text fontSize="xl" fontWeight="bold" color="green.600">Price: KES 100,000 per day</Text>
        </Box>
      </Stack>
    </Box>
  );

  const renderContactPage = () => (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Contact Us
      </Heading>
      <Stack direction="row" spacing={8}>
        <Link href="https://www.facebook.com/shpins" isExternal>
          <Icon as={FaFacebook} boxSize={8} />
        </Link>
        <Link href="https://www.twitter.com/shpins" isExternal>
          <Icon as={FaTwitter} boxSize={8} />
        </Link>
        <Link href="https://www.instagram.com/shpins" isExternal>
          <Icon as={FaInstagram} boxSize={8} />
        </Link>
        <Link href="https://wa.me/1234567890" isExternal>
          <Icon as={FaWhatsapp} boxSize={8} />
        </Link>
      </Stack>
    </Box>
  );

  return (
    <Box>
      {!isLoggedIn ? (
        renderLoginPage()
      ) : (
        <>
          {renderVehiclesPage()}
          {renderContactPage()}
        </>
      )}
    </Box>
  );
};

export default Index;
