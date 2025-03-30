'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const featuredOrdinals = [
  {
    name: 'Taproot Wizards',
    label: 'WHAT\'S NEW',
    price: '0.01',
    image: '/collections/taproot-wizards.png'
  },
  {
    name: 'Quantum Cats',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/quantum-cats.png'
  },
  {
    name: 'Ordinal Maxi Biz',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/ordinal-maxi.png'
  },
  {
    name: 'OnChainMonkey (OCM) Genesis',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/ocm-genesis.png'
  },
  {
    name: 'IDIOTS',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/idiots.png'
  },
  {
    name: 'NodeMonkes',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/node-monkes.png'
  },
  {
    name: 'Bitcoin Puppets',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/bitcoin-puppets.png'
  },
  {
    name: 'Pizza Pets',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/pizza-pets.png'
  },
  {
    name: 'Fukuhedrons',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/fukuhedrons.png'
  },
  {
    name: 'Based Angels',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/based-angels.png'
  },
  {
    name: 'Pizza Ninjas',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/pizza-ninjas.png'
  },
  {
    name: 'Runestone',
    label: 'HOT COLLECTION',
    price: '0.01',
    image: '/collections/runestone.png'
  }
];

export default function FeaturedOrdinals() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(featuredOrdinals.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = featuredOrdinals.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box py={20} px={{ base: 4, sm: 6, lg: 8 }} bg="whiteAlpha.50">
      <Container maxW="7xl">
        <Flex justify="space-between" align="end" mb={12}>
          <Box>
            <Heading size="lg" mb={2}>
              Featured Ordinals
            </Heading>
            <Text color="whiteAlpha.700">
              Curated collection of exceptional inscriptions
            </Text>
          </Box>
          <Button
            variant="ghost"
            color="whiteAlpha.700"
            display={{ base: 'none', sm: 'block' }}
            _hover={{ color: 'white' }}
            rightIcon={<Text as="span">→</Text>}
          >
            View All
          </Button>
        </Flex>

        <Box position="relative">
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: 4, lg: 5 }}
          >
            {currentItems.map((ordinal, i) => (
              <Box
                key={i}
                role="group"
                position="relative"
                transition="all 0.3s"
                _hover={{ transform: 'scale(1.02)' }}
              >
                <Box
                  overflow="hidden"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(12px)"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  transition="all 0.3s"
                  _groupHover={{ shadow: '2xl', shadowColor: 'brand.primary' }}
                >
                  <Box
                    position="relative"
                    pb="100%"
                    bg="whiteAlpha.100"
                    overflow="hidden"
                  >
                    <Image
                      src={ordinal.image}
                      alt={ordinal.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <VStack spacing={2} p={4}>
                    <Flex w="full" justify="space-between" align="start">
                      <Box>
                        <Text color="white" fontWeight="semibold" fontSize="sm">
                          {ordinal.name}
                        </Text>
                        <Text color="whiteAlpha.700" fontSize="xs" mt={0.5}>
                          {ordinal.label}
                        </Text>
                      </Box>
                      <Text variant="price" fontSize="sm">
                        {ordinal.price} ₿
                      </Text>
                    </Flex>
                    <Box
                      pt={3}
                      borderTop="1px"
                      borderColor="whiteAlpha.100"
                      w="full"
                    >
                      <Button
                        variant="ghost"
                        w="full"
                        size="sm"
                        color="white"
                        bg="whiteAlpha.50"
                        _hover={{
                          bg: 'whiteAlpha.200',
                          transform: 'translateY(-1px)',
                          shadow: 'lg'
                        }}
                        _active={{
                          transform: 'translateY(0)',
                          shadow: 'md'
                        }}
                        transition="all 0.2s"
                        fontWeight="medium"
                        bgGradient="linear(to-r, whiteAlpha.50, whiteAlpha.100)"
                        _groupHover={{
                          bgGradient: 'linear(to-r, brand.primary, brand.accent)',
                          opacity: 0.9
                        }}
                      >
                        View Collection
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Navigation Arrows */}
          <HStack
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            w="full"
            justify="space-between"
            px={-4}
            display={{ base: 'none', lg: 'flex' }}
          >
            <Button
              onClick={prevPage}
              variant="ghost"
              color="white"
              rounded="full"
              size="lg"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              <Icon as={FiChevronLeft} boxSize={6} />
            </Button>
            <Button
              onClick={nextPage}
              variant="ghost"
              color="white"
              rounded="full"
              size="lg"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              <Icon as={FiChevronRight} boxSize={6} />
            </Button>
          </HStack>
        </Box>

        {/* Mobile View All Button */}
        <Box mt={8} textAlign="center" display={{ base: 'block', sm: 'none' }}>
          <Button
            variant="ghost"
            color="whiteAlpha.700"
            _hover={{ color: 'white' }}
            rightIcon={<Text as="span">→</Text>}
          >
            View All Collections
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
