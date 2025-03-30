'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

export const trendingCollections = [
  { rank: 1, name: 'Taproot Wizards', floor: '0.204', volume: '61.88', change: '+11.1%', sales: 286, items: '448/2,100', image: '😃', avatar: 'https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/f:webp/rs:fill:640:640:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2Ftaproot_wizards%2F220e66a2-e18a-4099-9d4a-1f73ea27b10c' },
  { rank: 2, name: 'Ordinal Maxi Biz', floor: '0.032', volume: '1.709', change: '+0.9%', sales: 50, items: '827/9,000', image: '🌎' },
  { rank: 3, name: 'Quantum Cats', floor: '0.087', volume: '1.132', change: '-28.3%', sales: 13, items: '134/3,333', image: '🐱' },
  { rank: 4, name: 'NodeMonkes', floor: '0.039', volume: '0.909', change: '-6.5%', sales: 22, items: '1,469/10K', image: '🐵' },
  { rank: 5, name: 'Bitcoin Puppets', floor: '0.038', volume: '0.814', change: '-9.4%', sales: 21, items: '1,755/10K', image: '🐾' },
  { rank: 6, name: 'bitmap', floor: '0.00029', volume: '0.454', change: '+20.3%', sales: 1272, items: '32.7k/890K', image: '🎨' },
  { rank: 7, name: 'Runestone', floor: '0.0019', volume: '0.256', change: '-1.1%', sales: 140, items: '3,151/112.4K', image: '🗿' },
  { rank: 8, name: 'Bitcoin Wizards', floor: '0.047', volume: '0.177', change: '+3.3%', sales: 4, items: '111/1,338', image: '🧙' },
  { rank: 9, name: 'Bitcoin Frogs', floor: '0.011', volume: '0.14', change: '+1.7%', sales: 13, items: '1,141/10K', image: '🐸' },
  { rank: 10, name: 'Based Angels', floor: '0.0046', volume: '0.098', change: '-1.5%', sales: 21, items: '650/5,555', image: '👼' },
  { rank: 11, name: 'Pizza Ninjas', floor: '0.045', volume: '0.085', change: '+1.6%', sales: 2, items: '112/1,459', image: '🍕' },
  { rank: 12, name: 'OCM Genesis', floor: '0.033', volume: '0.073', change: '-1.0%', sales: 2, items: '430/10K', image: '👽' },
  { rank: 13, name: 'BTC DeGods', floor: '0.028', volume: '0.06', change: '-0.8%', sales: 1, items: '94/635', image: '👹' },
  { rank: 14, name: 'IDIOTS', floor: '0.0007', volume: '0.059', change: '+10.1%', sales: 82, items: '1,007/10K', image: '🤪' },
  { rank: 15, name: 'RSIC METAPROTOCOL', floor: '0.0019', volume: '0.059', change: '+1.0%', sales: 23, items: '1,034/21K', image: '💻' },
  { rank: 16, name: 'Yokai Avengers', floor: '0.022', volume: '0.056', change: '+9.5%', sales: 3, items: '103/685', image: '👺' },
  { rank: 17, name: 'O.P.I.U.M.', floor: '0.047', volume: '0.043', change: '-2.1%', sales: 1, items: '120/777', image: '💀' },
  { rank: 18, name: 'BIS ARTIFACTS', floor: '0.0079', volume: '0.042', change: '+14.6%', sales: 6, items: '1/264', image: '🌟' },
  { rank: 19, name: 'Natcats', floor: '0.0079', volume: '0.036', change: '-6.5%', sales: 2, items: '852/8,064', image: '🐱' },
  { rank: 20, name: 'THORdinals', floor: '0.003', volume: '0.031', change: '+20.0%', sales: 11, items: '68/1,151', image: '⚡' },
  { rank: 21, name: 'AILU', floor: '0.0043', volume: '0.028', change: '+7.5%', sales: 7, items: '257/2,100', image: '🐼' },
  { rank: 22, name: 'Rare Sats', floor: '<0.00001', volume: '0.025', change: '--', sales: 104, items: '16.9K/190.3K', image: '💰' },
  { rank: 23, name: 'The Golden Horseshoe', floor: '0.002', volume: '0.022', change: '-20.0%', sales: 11, items: '49/504', image: '🍀' },
  { rank: 24, name: 'Bitcoin Punks', floor: '0.0068', volume: '0.02', change: '-11.7%', sales: 3, items: '999/10K', image: '👷' },
  { rank: 25, name: 'The Wizards of Ord', floor: '0.0097', volume: '0.018', change: '+0.7%', sales: 2, items: '221/3,333', image: '🧙' },
  { rank: 26, name: 'SMBTC by Relics', floor: '0.0014', volume: '0.017', change: '-7.0%', sales: 13, items: '316/3,219', image: '🐒' },
  { rank: 27, name: 'Aeons', floor: '0.0024', volume: '0.016', change: '-7.7%', sales: 7, items: '377/3,333', image: '⌛' },
  { rank: 28, name: 'Fukuhedrons', floor: '0.0013', volume: '0.014', change: '-1.5%', sales: 12, items: '1,552/10K', image: '📊' },
  { rank: 29, name: 'BLIFSTONE', floor: '0.001', volume: '0.013', change: '-25.9%', sales: 11, items: '215/5,000', image: '🔥' },
  { rank: 30, name: 'CENTS', floor: '0.0035', volume: '0.013', change: '+3.1%', sales: 4, items: '880/10K', image: '🪙' },
  { rank: 31, name: 'Bitcoin Bandits', floor: '0.011', volume: '0.013', change: '-6.8%', sales: 1, items: '48/512', image: '🕵' },
  { rank: 32, name: 'Blob', floor: '0.0016', volume: '0.012', change: '+14.2%', sales: 8, items: '902/10K', image: '👻' },
  { rank: 33, name: 'Alkane Imperium (AI)', floor: '0.012', volume: '0.012', change: '--', sales: 1, items: '8/59', image: '🤖' },
  { rank: 34, name: 'BOB on Genify', floor: '0.0002', volume: '0.0094', change: '--', sales: 8, items: '786/10K', image: '🤡' },
  { rank: 35, name: 'Unsanctioned Wizards', floor: '0.0012', volume: '0.0089', change: '+20.0%', sales: 8, items: '323/4,095', image: '🧙' },
  { rank: 36, name: 'Hashlings', floor: '0.0023', volume: '0.008', change: '-7.7%', sales: 2, items: '371/5,090', image: '👾' },
  { rank: 37, name: 'Mintify Bitcoin Keys', floor: '0.00011', volume: '0.0078', change: '+34.8%', sales: 52, items: '391/14.3K', image: '🔑' },
  { rank: 38, name: 'Experiment 9', floor: '0.0019', volume: '0.0073', change: '-7.6%', sales: 4, items: '82/420', image: '🤓' },
  { rank: 39, name: 'Clay:44', floor: '0.007', volume: '0.007', change: '--', sales: 1, items: '38/444', image: '👨‍🎨' },
  { rank: 40, name: 'Ordinookis', floor: '0.00085', volume: '0.0066', change: '--', sales: 7, items: '449/2,907', image: '🐻' },
  { rank: 41, name: 'Mining Passes', floor: '0.0024', volume: '0.0063', change: '+13.8%', sales: 3, items: '173/3,307', image: '⛏' },
  { rank: 42, name: 'Taproot Witches', floor: '0.0011', volume: '0.0059', change: '-3.7%', sales: 6, items: '463/3,333', image: '🧙‍♀️' },
  { rank: 43, name: 'BITMINER', floor: '0.0006', volume: '0.0057', change: '+27.7%', sales: 8, items: '83/4,931', image: '⛏' },
  { rank: 44, name: 'Shadows by Forgotten Runes', floor: '0.0047', volume: '0.0053', change: '--', sales: 2, items: '148/666', image: '👻' },
  { rank: 45, name: 'The Rune Guardians - Miners', floor: '0.00034', volume: '0.0047', change: '+141.4%', sales: 22, items: '703/10K', image: '⛏' },
  { rank: 46, name: 'Untitled', floor: '0.005', volume: '0.0046', change: '--', sales: 1, items: '53/222', image: '🎨' },
  { rank: 47, name: 'INK', floor: '0.00065', volume: '0.0043', change: '+10.2%', sales: 7, items: '1,031/10K', image: '🖌' },
  { rank: 48, name: 'WPNZ', floor: '0.0014', volume: '0.0038', change: '-20.9%', sales: 3, items: '57/555', image: '🗡' },
  { rank: 49, name: 'Pixel Pepes', floor: '0.0039', volume: '0.0038', change: '-4.9%', sales: 1, items: '157/1,563', image: '😋' },
  { rank: 50, name: 'Gamma Winter Pass', floor: '0.0014', volume: '0.0035', change: '+21.7%', sales: 3, items: '16/666', image: '❄' },
  { rank: 51, name: 'GeniiData Genesis Pass', floor: '0.0055', volume: '0.0035', change: '-21.4%', sales: 1, items: '44/400', image: '🔮' },
  { rank: 52, name: 'n0 Ordinary kind', floor: '0.0007', volume: '0.0033', change: '-6.7%', sales: 3, items: '688/7,680', image: '🌈' },
  { rank: 53, name: 'Vimodyin by Ivy', floor: '0.00049', volume: '0.0033', change: '+25.6%', sales: 6, items: '114/1,000', image: '🌿' },
  { rank: 54, name: 'Lasogette', floor: '0.0022', volume: '0.0032', change: '-0.9%', sales: 2, items: '465/3,915', image: '🐉' },
  { rank: 55, name: 'BUZZ BUZZ BUZZ by FAR', floor: '0.00011', volume: '0.0032', change: '-7.7%', sales: 3, items: '1,908/24.3K', image: '🐝' },
  { rank: 56, name: 'Demonz', floor: '0.0005', volume: '0.0031', change: '+16.3%', sales: 7, items: '200/666', image: '👹' },
  { rank: 57, name: 'Trumpstone', floor: '0.00015', volume: '0.003', change: '+20.8%', sales: 21, items: '280/10K', image: '🎸' },
  { rank: 58, name: 'DogePunks', floor: '0.00049', volume: '0.0029', change: '--', sales: 5, items: '1,297/9,998', image: '🐶' },
  { rank: 59, name: 'Geminions by JRNE', floor: '0.00029', volume: '0.0026', change: '+16.9%', sales: 10, items: '350/3,333', image: '👼' },
  { rank: 60, name: 'Behold by Steven Miller', floor: '0.0044', volume: '0.0025', change: '--', sales: 1, items: '2/508', image: '📷' },
  { rank: 61, name: 'STONES', floor: '0.00055', volume: '0.0023', change: '--', sales: 4, items: '634/10K', image: '🪨' },
  { rank: 62, name: 'Ordlinks', floor: '0.00025', volume: '0.0024', change: '+34.6%', sales: 12, items: '775/10K', image: '🔗' },
  { rank: 63, name: 'Jeets On Bitcoin', floor: '0.00006', volume: '0.002', change: '-44.5%', sales: 22, items: '507/5,555', image: '😎' },
  { rank: 64, name: 'Pizza Pets Game', floor: '0.0006', volume: '0.002', change: '-1.6%', sales: 2, items: '575/12K', image: '🐶' },
  { rank: 65, name: 'counterfeit cards', floor: '0.00064', volume: '0.0019', change: '--', sales: 3, items: '339/5,096', image: '🎴' },
  { rank: 66, name: 'Goosinals', floor: '0.00065', volume: '0.0019', change: '-7.1%', sales: 3, items: '1,020/10K', image: '🦆' },
  { rank: 67, name: 'BRC1024 Rootverse', floor: '0.00002', volume: '0.0017', change: '--', sales: 96, items: '10.4K/210K', image: '🌳' },
  { rank: 68, name: 'OMEN', floor: '0.00069', volume: '0.0017', change: '-0.1%', sales: 2, items: '432/10K', image: '🔮' },
  { rank: 69, name: 'Seekermint OG PASS', floor: '0.0011', volume: '0.0016', change: '+39.2%', sales: 2, items: '56/777', image: '🔎' },
  { rank: 70, name: 'wizardz', floor: '0.0018', volume: '0.0015', change: '+49.9%', sales: 1, items: '62/333', image: '🧙' },
  { rank: 71, name: 'Yuna Genesis', floor: '0.00099', volume: '0.0014', change: '--', sales: 2, items: '13/111', image: '👸' },
  { rank: 72, name: 'PoorTraits', floor: '0.00022', volume: '0.0013', change: '-26.7%', sales: 5, items: '1,016/10K', image: '👨‍🎨' },
  { rank: 73, name: 'Ordinal Misfits', floor: '0.0011', volume: '0.0011', change: '+0.1%', sales: 1, items: '90/1,020', image: '😈' },
  { rank: 74, name: 'Logos Operators', floor: '0.0014', volume: '0.001', change: '-6.7%', sales: 1, items: '80/1,000', image: '👨‍💻' },
  { rank: 75, name: 'Super Early Ordies', floor: '0.00095', volume: '0.001', change: '--', sales: 1, items: '70/420', image: '🚀' },
  { rank: 76, name: 'Ordinal SigmaX', floor: '0.00054', volume: '0.00099', change: '-2.2%', sales: 4, items: '347/5,555', image: '🔭' },
  { rank: 77, name: 'Insurgence by Debauchery', floor: '0.0008', volume: '0.00092', change: '-11.1%', sales: 1, items: '436/3,500', image: '💥' },
  { rank: 78, name: 'Frucks', floor: '0.00045', volume: '0.0009', change: '--', sales: 2, items: '1,083/4,848', image: '🥛' },
  { rank: 79, name: 'Bitcoin Pills', floor: '0.00017', volume: '0.00085', change: '--', sales: 5, items: '1,029/6,584', image: '💊' },
  { rank: 80, name: 'The Royals', floor: '0.00082', volume: '0.0008', change: '-2.4%', sales: 1, items: '1,270/10.1K', image: '👑' },
  { rank: 81, name: 'Inflatables: Arrival', floor: '0.00075', volume: '0.00075', change: '--', sales: 1, items: '106/800', image: '🎈' },
  { rank: 82, name: 'Monkes Twenty One', floor: '0.00003', volume: '0.00071', change: '+50.0%', sales: 33, items: '2,798/21K', image: '🐒' },
  { rank: 83, name: 'BITCOIN BABBIES', floor: '0.00065', volume: '0.0007', change: '--', sales: 2, items: '411/5,020', image: '👶' },
  { rank: 84, name: 'XO Unchained (BRC-555)', floor: '0.00047', volume: '0.00068', change: '--', sales: 2, items: '633/10K', image: '🎮' },
  { rank: 85, name: 'Skullx: Hell Raiders', floor: '0.0013', volume: '0.00066', change: '+30.3%', sales: 1, items: '79/666', image: '💀' },
  { rank: 86, name: 'Pingoos', floor: '0.002', volume: '0.0006', change: '--', sales: 1, items: '162/1,259', image: '🐧' },
  { rank: 87, name: 'Runes Keys', floor: '0.00039', volume: '0.00029', change: '-2.5%', sales: 1, items: '89/4,444', image: '🔑' },
  { rank: 88, name: 'Motion Node Monkes', floor: '0.0005', volume: '0.0005', change: '-50.0%', sales: 1, items: '57/101', image: '🐵' },
  { rank: 89, name: 'Boneys by Bitcoin Burials', floor: '0.00011', volume: '0.0005', change: '--', sales: 1, items: '1,795/10K', image: '💀' },
  { rank: 90, name: 'Bitmap Emporium Land', floor: '0.00057', volume: '0.0006', change: '+14.0%', sales: 1, items: '117/2,574', image: '🏛' },
  { rank: 91, name: 'BTC MachineDAO', floor: '0.0005', volume: '0.00049', change: '-16.5%', sales: 1, items: '75/777', image: '🤖' },
  { rank: 92, name: 'SONS OF SATOSHI', floor: '0.00049', volume: '0.00049', change: '-0.2%', sales: 1, items: '28/100', image: '👨‍💻' },
  { rank: 93, name: 'Prometheans', floor: '0.00019', volume: '0.00048', change: '-33.2%', sales: 3, items: '1,348/4,444', image: '🔥' },
  { rank: 94, name: 'Loboverse', floor: '0.0002', volume: '0.00047', change: '-12.7%', sales: 2, items: '1,392/10K', image: '🦊' },
  { rank: 95, name: 'PatoshiPunks', floor: '0.0004', volume: '0.00041', change: '--', sales: 2, items: '1,277/10K', image: '🥸' },
  { rank: 96, name: 'Bitcoin Digits', floor: '0.0005', volume: '0.0004', change: '+25.0%', sales: 1, items: '611/11.1K', image: '🔢' },
  { rank: 97, name: 'Plottable Patterns by Deth', floor: '0.0004', volume: '0.0004', change: '--', sales: 1, items: '24/111', image: '📈' },
  { rank: 98, name: 'GOB', floor: '0.00008', volume: '0.00039', change: '--', sales: 3, items: '985/16.3K', image: '🤡' },
  { rank: 99, name: '0N:1 FORCE: Void Drives', floor: '0.0003', volume: '0.00039', change: '--', sales: 1, items: '161/3,333', image: '🔒' },
  { rank: 100, name: 'Space Pepes', floor: '0.00008', volume: '0.00038', change: '+14.3%', sales: 5, items: '950/17.4K', image: '🚀' },
];

const timeFilters = ['1h', '6h', '24h'];

export default function TrendingCollections() {
  const [visibleCollections, setVisibleCollections] = useState(20);

  const loadMore = () => {
    setVisibleCollections(prev => Math.min(prev + 20, trendingCollections.length));
  };
  return (
    <Box>
      <Flex 
        justify="space-between" 
        align="center" 
        mb={6}
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 4, sm: 0 }}
      >
        <Heading size="md" color="white">Trending Collections</Heading>
        <HStack spacing={{ base: 2, md: 4 }}>
          {timeFilters.map((filter) => (
            <Button
              key={filter}
              size="sm"
              variant="ghost"
              color="whiteAlpha.700"
              _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
            >
              {filter}
            </Button>
          ))}
        </HStack>
      </Flex>

      <Box
        bg="whiteAlpha.50"
        backdropFilter="blur(12px)"
        borderRadius="xl"
        overflow={{ base: 'auto', lg: 'hidden' }}
      >
        <Box minW={{ base: '800px', lg: 'auto' }}>
          {/* Table Header */}
          <Grid
            templateColumns={{
              base: '50px 1fr 100px 100px 100px',
              md: '50px 1fr 120px 120px 100px 80px 120px'
            }}
            gap={{ base: 2, md: 4 }}
            p={{ base: 3, md: 4 }}
            borderBottom="1px"
            borderColor="whiteAlpha.100"
            bg="whiteAlpha.50"
            alignItems="center"
          >
            <Text color="whiteAlpha.600" fontSize="sm">#</Text>
            <Text color="whiteAlpha.600" fontSize="sm">Collection</Text>
            <Text color="whiteAlpha.600" fontSize="sm" bgGradient="linear(to-r, brand.price.start, brand.price.end)" bgClip="text">Floor</Text>
            <Text color="whiteAlpha.600" fontSize="sm" bgGradient="linear(to-r, brand.price.start, brand.price.end)" bgClip="text" display={{ base: 'none', sm: 'block' }}>Volume</Text>
            <Text color="whiteAlpha.600" fontSize="sm" display={{ base: 'none', sm: 'block' }}>Change</Text>
            <Text color="whiteAlpha.600" fontSize="sm" display={{ base: 'none', md: 'block' }}>Sales</Text>
            <Text color="whiteAlpha.600" fontSize="sm" display={{ base: 'none', md: 'block' }}>Items</Text>
          </Grid>

          {/* Collection Rows */}
          {trendingCollections.slice(0, visibleCollections).map((collection, i) => (
            <Link
              key={i}
              href={`/collection/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                p={{ base: 3, md: 4 }}
                borderBottom={i !== trendingCollections.length - 1 ? '1px' : 'none'}
                fontSize="sm"
                borderColor="whiteAlpha.100"
                _hover={{ bg: 'whiteAlpha.100' }}
                transition="all 0.2s"
                cursor="pointer"
              >
              <Grid
                templateColumns={{
                  base: '50px 1fr 100px 100px 100px',
                  md: '50px 1fr 120px 120px 100px 80px 120px'
                }}
                gap={{ base: 2, md: 4 }}
                alignItems="center"
              >
                <Text color="whiteAlpha.700">{collection.rank}</Text>
                <HStack spacing={{ base: 1, md: 2 }}>
                  {collection.avatar ? (
                    <Box position="relative" w="32px" h="32px" borderRadius="full" overflow="hidden" mr={{ base: 1, md: 2 }}>
                      <Image
                        src={collection.avatar}
                        alt={collection.name}
                        width={32}
                        height={32}
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  ) : (
                    <Text fontSize={{ base: 'lg', md: 'xl' }} mr={{ base: 1, md: 2 }}>{collection.image}</Text>
                  )}
                  <Text color="white" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} isTruncated>{collection.name}</Text>
                </HStack>
                <Text variant="price" fontSize={{ base: 'xs', md: 'sm' }}>{collection.floor} ₿</Text>
                <Text variant="price" display={{ base: 'none', sm: 'block' }} fontSize={{ base: 'xs', md: 'sm' }}>{collection.volume} ₿</Text>
                <Text 
                  color={collection.change.startsWith('+') ? 'green.400' : 'red.400'}
                  display={{ base: 'none', sm: 'block' }}
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  {collection.change}
                </Text>
                <Text color="white" display={{ base: 'none', md: 'block' }} fontSize={{ base: 'xs', md: 'sm' }}>{collection.sales}</Text>
                <Text color="whiteAlpha.700" display={{ base: 'none', md: 'block' }} fontSize={{ base: 'xs', md: 'sm' }}>{collection.items}</Text>
              </Grid>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      {visibleCollections < trendingCollections.length && (
        <Box textAlign="center" mt={6}>
          <Button
            onClick={loadMore}
            size="lg"
            bgGradient="linear(to-r, #FF8A00, #FF0080)"
            color="white"
            border="none"
            px={8}
            py={6}
            fontSize="xl"
            fontWeight="medium"
            borderRadius="full"
            _hover={{
              opacity: 0.9,
              transform: 'scale(1.02)',
            }}
            transition="all 0.2s"
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}
