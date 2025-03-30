'use client';

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  HStack,
  Divider,
  Table,
  Tbody,
  Tr,
  Td,
  Icon,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import { trendingCollections } from '../../../../components/TrendingCollections';
import { TaprootWizardsNFTs, collectionInfo } from '../../../../data/Taproot-Wizards';

export default function ItemPage() {
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

  // Generate mock item data
  const generateMockItem = (id: string) => {
    // Extract just the number from ordinal-maxi-biz-2 -> 2
    const itemNumber = id.split('-').pop() || id;
    return {
      id,
      name: `${collectionData.name} #${itemNumber}`,
      image: collectionData.avatar || `https://via.placeholder.com/300?text=${encodeURIComponent(collectionData.name)}%20%23${itemNumber}`,
      price: (Math.random() * parseFloat(collectionData.floor)).toFixed(4),
      attributes: [
        { trait_type: 'Background', value: 'Rare' },
        { trait_type: 'Type', value: 'Legendary' },
      ]
    };
  };

  // Get real data for Taproot Wizards, mock data for others
  const item = collectionData.name === 'Taproot Wizards' ?
    TaprootWizardsNFTs.find(nft => nft.id.toLowerCase() === params.id) || generateMockItem(params.id as string) :
    generateMockItem(params.id as string);

  return (
    <Box minH="100vh" bg="brand.dark">
      <Header />
      
      <Box
        bgGradient="linear(to-b, rgba(247, 147, 26, 0.15), rgba(255, 51, 102, 0.1), transparent)"
        borderBottom="1px"
        borderColor="whiteAlpha.200"
        py={10}
        mb={8}
      >
        <Container maxW="7xl">
          <Stack spacing={8}>
          {/* Breadcrumb */}
          <HStack color="whiteAlpha.700" spacing={2}>
            <Link href="/"><Text _hover={{ color: 'white' }}>Home</Text></Link>
            <Text>/</Text>
            <Link href={`/collection/${params.slug}`}>
              <Text _hover={{ color: 'white' }}>{collectionData.name}</Text>
            </Link>
            <Text>/</Text>
            <Text color="white">{item.name}</Text>
          </HStack>

          {/* Item Content */}
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} maxW="7xl" mx="auto">
            {/* Left Column - Image */}
            <Box
              bg="whiteAlpha.50"
              borderRadius="2xl"
              overflow="hidden"
              aspectRatio={1}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={600}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                priority
              />
            </Box>

            {/* Right Column - Details */}
            <Stack spacing={8}>
              <Stack spacing={4}>
                <Stack spacing={1}>
                  <Text color="whiteAlpha.700" fontSize="sm">Collection</Text>
                  <Link href={`/collection/${params.slug}`}>
                    <HStack spacing={3}>
                      {collectionData.avatar && (
                        <Box w="32px" h="32px" borderRadius="full" overflow="hidden">
                          <Image
                            src={collectionData.avatar}
                            alt={collectionData.name}
                            width={32}
                            height={32}
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      )}
                      <Text color="white" fontSize="lg" fontWeight="bold" _hover={{ color: 'brand.accent' }}>
                        {collectionData.name}
                      </Text>
                    </HStack>
                  </Link>
                </Stack>

                <HStack spacing={2}>
                  <Heading color="white" size="2xl">{item.name}</Heading>
                  <Icon as={CheckCircleIcon} color="#F7931A" boxSize={6} />
                </HStack>

                {collectionData.name === 'Taproot Wizards' && (
                  <Text color="whiteAlpha.800" fontSize="md" lineHeight="tall">
                    {collectionInfo.description.split('\n')[0]}
                  </Text>
                )}
              </Stack>

              <Box
                bg="rgba(255, 255, 255, 0.03)"
                borderRadius="2xl"
                border="1px solid"
                borderColor="orange.400"
                p={6}
                backdropFilter="blur(8px)"
              >
                <Stack spacing={6}>
                  <Stack spacing={1}>
                    <Text color="whiteAlpha.700" fontSize="sm">Current Price</Text>
                    <Heading color="#F7931A" size="xl">{item.price} BTC</Heading>
                    <Text color="whiteAlpha.600">(${(parseFloat(item.price) * 65000).toFixed(2)} USD)</Text>
                  </Stack>

                  <Stack spacing={4}>
                    <Button
                      size="lg"
                      colorScheme="brand"
                      width="full"
                      bgGradient="linear(to-r, rgba(247, 147, 26, 0.9), rgba(255, 51, 102, 0.9))"
                      _hover={{
                        bgGradient: 'linear(to-r, rgba(255, 51, 102, 0.9), rgba(247, 147, 26, 0.9))',
                        transform: 'translateY(-2px)',
                        shadow: 'lg'
                      }}
                      leftIcon={<Text>⚡</Text>}
                    >
                      Buy Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      width="full"
                      color="#F7931A"
                      borderColor="#F7931A"
                      bg="rgba(255, 255, 255, 0.03)"
                      _hover={{
                        bg: 'rgba(247, 147, 26, 0.1)',
                        transform: 'translateY(-2px)',
                        shadow: 'lg'
                      }}
                      leftIcon={<Text>💰</Text>}
                    >
                      Make an Offer
                    </Button>
                  </Stack>
                </Stack>
              </Box>

              <Box
                bg="rgba(255, 255, 255, 0.03)"
                borderRadius="2xl"
                border="1px solid"
                borderColor="orange.400"
                overflow="hidden"
                backdropFilter="blur(8px)"
              >
                <Table variant="unstyled" size="sm">
                  <Tbody>
                    <Tr>
                      <Td color="whiteAlpha.700">Inscription ID</Td>
                      <Td isNumeric>
                        <Text color="white" fontFamily="mono">{item.id}</Text>
                      </Td>
                    </Tr>
                    <Tr bg="whiteAlpha.50">
                      <Td color="whiteAlpha.700">Owner</Td>
                      <Td isNumeric>
                        <Text color="white" fontFamily="mono">bc1q...</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td color="whiteAlpha.700">Content Type</Td>
                      <Td isNumeric>
                        <Text color="white">image/png</Text>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Box>
    <Footer />
  </Box>
  );
}
