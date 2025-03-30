'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import TrendingCollections from '../components/TrendingCollections';
import FeaturedOrdinals from '../components/FeaturedOrdinals';
import Header from '../components/Header';
import NewCollections from '../components/NewCollections';
import Footer from '../components/Footer';


export default function Home() {
  const bgGradient = 'linear(to-r, #F7931A, #FF3366)';

  return (
    <Box
      minH="100vh"
      bg="#0A0B0D"
      backgroundImage="radial-gradient(circle at 50% 0%, rgba(247, 147, 26, 0.03) 0%, rgba(255, 51, 102, 0.02) 25%, rgba(0, 0, 0, 0) 50%)"
    >
      <Header />

      {/* Hero Section */}
      <Container maxW="7xl" pt={32} pb={20} px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack spacing={8} textAlign="center">
          <Heading size={{ base: '2xl', sm: '3xl', lg: '4xl' }} lineHeight="shorter">
            <Text as="span" color="#F7931A">
              Discover Rare
            </Text>
            <br />
            <Text as="span" bgGradient={bgGradient} bgClip="text">
              Bitcoin Ordinals
            </Text>
          </Heading>
          <Text
            color="whiteAlpha.700"
            fontSize={{ base: 'lg', sm: 'xl' }}
            maxW="2xl"
            lineHeight="relaxed"
          >
            Explore and collect unique digital artifacts inscribed on the Bitcoin blockchain.
          </Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            pt={4}
            align="center"
          >
            <Button
              size="lg"
              bgGradient="linear(to-r, rgba(247, 147, 26, 0.9), rgba(255, 51, 102, 0.9))"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, rgba(255, 51, 102, 0.9), rgba(247, 147, 26, 0.9))',
                transform: 'translateY(-2px)',
                shadow: 'lg'
              }}
            >
              Start Exploring
            </Button>
            <Button
              size="lg"
              variant="outline"
              color="#F7931A"
              borderColor="#F7931A"
              bg="rgba(247, 147, 26, 0.05)"
              _hover={{
                bg: 'rgba(247, 147, 26, 0.1)',
                transform: 'translateY(-2px)',
                shadow: 'lg'
              }}
            >
              Learn More
            </Button>
          </Stack>
        </VStack>
      </Container>

      <FeaturedOrdinals />

      {/* Trending Collections */}
      <Box
        py={20}
        px={{ base: 4, sm: 6, lg: 8 }}
        bg="rgba(255, 255, 255, 0.02)"
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
      >
        <Container maxW="7xl">
          <TrendingCollections />
        </Container>
      </Box>

      {/* New Collections */}
      <Box
        py={20}
        px={{ base: 4, sm: 6, lg: 8 }}
        bg="rgba(255, 255, 255, 0.02)"
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
      >
        <Container maxW="7xl">
          <NewCollections />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
