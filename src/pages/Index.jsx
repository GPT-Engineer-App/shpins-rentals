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
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
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
    </Flex>
  );

  const renderVehiclesPage = () => (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Available Vehicles
      </Heading>
      <Stack spacing={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWx8ZW58MHx8fHwxNzExMzU1NDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car 1" mb={4} />
          <Heading as="h2" size="lg">
            Sedan
          </Heading>
          <Text>Price: KES 5,000 per day</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXYlMjByZW50YWx8ZW58MHx8fHwxNzExMzU1NDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car 2" mb={4} />
          <Heading as="h2" size="lg">
            SUV
          </Heading>
          <Text>Price: KES 8,000 per day</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YW4lMjByZW50YWx8ZW58MHx8fHwxNzExMzU1NDk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Car 3" mb={4} />
          <Heading as="h2" size="lg">
            Van
          </Heading>
          <Text>Price: KES 10,000 per day</Text>
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
