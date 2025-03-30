'use client';

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Flex,
  Stack,
  Button,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { trendingCollections } from '../../../components/TrendingCollections';
import { TaprootWizardsNFTs, collectionInfo } from '../../../data/Taproot-Wizards';

export default function CollectionPage() {
  const params = useParams();
  const collectionData = trendingCollections.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!collectionData) {
    return (
      <Box minH="100vh" bg="brand.dark">
        <Header />
        <Container maxW="7xl" py={20}>
          <Text color="white">Collection not found</Text>
        </Container>
        <Footer />
      </Box>
    );
  }

  // Generate mock items for non-Taproot collections
  const generateMockItems = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const itemNumber = i + 1;
      return {
        id: itemNumber.toString(),
        name: `${collectionData.name} #${itemNumber}`,
        image: collectionData.avatar || `https://via.placeholder.com/300?text=${encodeURIComponent(collectionData.name)}%20%23${itemNumber}`,
        price: (Math.random() * parseFloat(collectionData.floor)).toFixed(4),
        attributes: [
          { trait_type: 'Background', value: 'Rare' },
          { trait_type: 'Type', value: 'Legendary' },
        ]
      };
    });
  };

  // Use real data for Taproot Wizards collection, mock data for others
  const items = collectionData.name === 'Taproot Wizards' ? TaprootWizardsNFTs : generateMockItems(12);

  return (
    <Box minH="100vh" bg="brand.dark">
      <Header />
      
      <Box
        bg="rgba(255, 255, 255, 0.02)"
        backdropFilter="blur(100px)"
        borderBottom="1px"
        borderColor="whiteAlpha.200"
        py={10}
        mb={8}
      >
        <Container maxW="7xl">
          {/* Breadcrumb */}
          <HStack color="whiteAlpha.700" spacing={2} mb={8}>
            <Link href="/"><Text _hover={{ color: 'white' }}>Home</Text></Link>
            <Text>/</Text>
            <Text color="white">{collectionData.name}</Text>
          </HStack>

          {/* Collection Header */}
          <Flex gap={8} direction={{ base: 'column', md: 'row' }} align="start">
            <Box
              w={{ base: '100%', md: '240px' }}
              h={{ base: '240px', md: '240px' }}
              borderRadius="2xl"
              overflow="hidden"
              bg="whiteAlpha.100"
              position="relative"
              border="1px solid"
              borderColor="purple.700"
            >
              {collectionData.avatar ? (
                <Image
                  src={collectionData.avatar}
                  alt={collectionData.name}
                  width={240}
                  height={240}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <Text fontSize="6xl">{collectionData.image}</Text>
              )}
            </Box>
            
            <Stack flex={1} spacing={6}>
              <Stack spacing={3}>
                <HStack spacing={2}>
                  <Heading color="white" size="2xl">{collectionData.name}</Heading>
                  <Icon as={CheckCircleIcon} color="#F7931A" boxSize={6} />
                </HStack>
                <Text color="whiteAlpha.700" fontSize="md" lineHeight="tall" maxW="3xl">
                  {collectionData.name === 'Taproot Wizards' ? collectionInfo.description : 'Collection description coming soon.'}
                </Text>
              </Stack>
              <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
                <Stat>
                  <StatLabel color="whiteAlpha.700">Floor Price</StatLabel>
                  <StatNumber color="white">{collectionData.floor} BTC</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.700">Volume</StatLabel>
                  <StatNumber color="white">{collectionData.volume} BTC</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.700">Items</StatLabel>
                  <StatNumber color="white">{collectionData.items}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel color="whiteAlpha.700">24h Change</StatLabel>
                  <StatNumber color={collectionData.change.startsWith('+') ? 'green.400' : 'red.400'}>
                    {collectionData.change}
                  </StatNumber>
                </Stat>
              </SimpleGrid>
            </Stack>
          </Flex>
        </Container>
      </Box>
      <Container maxW="7xl" py={12}>
        <Stack spacing={8}>
          {/* Filter & Sort */}
          <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
            <HStack spacing={4}>
              <Button
                variant="outline"
                colorScheme="purple"
                size="sm"
                leftIcon={<Text>🔍</Text>}
                bg="rgba(255, 255, 255, 0.03)"
                borderColor="orange.400"
                _hover={{ bg: 'rgba(255, 255, 255, 0.05)' }}
              >
                Filter
              </Button>
              <Button
                variant="outline"
                colorScheme="purple"
                size="sm"
                leftIcon={<Text>↕️</Text>}
                bg="rgba(255, 255, 255, 0.03)"
                borderColor="orange.400"
                _hover={{ bg: 'rgba(255, 255, 255, 0.05)' }}
              >
                Sort by: Price
              </Button>
            </HStack>
            <Text color="whiteAlpha.600" fontSize="sm">
              {items.length} items
            </Text>
          </Flex>

          {/* Items Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/collection/${params.slug}/${item.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  bg="rgba(255, 255, 255, 0.03)"
                  borderRadius="2xl"
                  overflow="hidden"
                  transition="all 0.2s"
                  _hover={{ 
                    transform: 'translateY(-4px)',
                    bg: 'rgba(247, 147, 26, 0.2)',
                    shadow: 'xl'
                  }}
                  border="1px solid"
                  borderColor="orange.400"
                  backdropFilter="blur(8px)"
                >
                  <Flex
                    aspectRatio={1}
                    align="center"
                    justify="center"
                    bg="whiteAlpha.50"
                    position="relative"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.name}`}
                      width={300}
                      height={300}
                      style={{ objectFit: 'cover' }}
                    />
                  </Flex>
                  <Box p={4}>
                    <Text color="white" fontWeight="bold" mb={2}>
                      {item.name}
                    </Text>
                    <Text color="whiteAlpha.700">
                      {item.price} BTC
                    </Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
