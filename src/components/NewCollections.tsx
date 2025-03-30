'use client';

import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

const newCollections = [
  {
    id: 'PBDK100464',
    inscription: '#1011726',
    name: 'Hybrid Hitmen Legion',
    image: '/collections/hybrid-hitmen.png',
  },
  {
    id: 'PBDK60748',
    inscription: '#1011726',
    name: 'A / O x UGOVI',
    image: '/collections/ao-ugovi.png',
  },
  {
    id: 'PBSU60378',
    inscription: '#1052007',
    name: 'OrdX Card Shop - Rares',
    image: '/collections/ordx-cards.png',
  },
  {
    id: 'PB4206033',
    inscription: '#1248023',
    name: 'WAAMBAT',
    image: '/collections/waambat.png',
  },
];

export default function NewCollections() {
  return (
    <Box mt={16}>
      <Heading size="md" color="white" mb={6}>
        New Bitcoin Collections
      </Heading>
      
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {newCollections.map((collection) => (
          <Box
            key={collection.id}
            bg="whiteAlpha.50"
            backdropFilter="blur(12px)"
            borderRadius="xl"
            overflow="hidden"
            transition="all 0.2s"
            _hover={{
              transform: 'translateY(-4px)',
              bg: 'whiteAlpha.100',
            }}
            cursor="pointer"
          >
            <Box position="relative" pb="100%" overflow="hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
            <VStack align="flex-start" p={4} spacing={1}>
              <Text color="white" fontWeight="medium">
                {collection.name}
              </Text>
              <Text
                fontSize="sm"
                bgGradient="linear(to-r, brand.price.start, brand.price.end)"
                bgClip="text"
                fontWeight="medium"
              >
                {collection.id} - {collection.inscription}
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
