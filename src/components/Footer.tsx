'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" py={12} mt={16} borderTop="1px" borderColor="whiteAlpha.100">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Text color="whiteAlpha.700">
            © 2025 PrimeOrdinals. All rights reserved.
          </Text>
          
          <HStack spacing={6}>
            <Link
              href="#"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
              fontSize="lg"
            >
              <Icon as={FaTwitter} />
            </Link>
            <Link
              href="#"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
              fontSize="lg"
            >
              <Icon as={FaDiscord} />
            </Link>
            <Link
              href="#"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
              fontSize="lg"
            >
              <Icon as={FaTelegram} />
            </Link>
          </HStack>
          
          <HStack spacing={6} color="whiteAlpha.700">
            <Link href="#" _hover={{ color: 'white' }}>
              Terms
            </Link>
            <Link href="#" _hover={{ color: 'white' }}>
              Privacy
            </Link>
            <Link href="#" _hover={{ color: 'white' }}>
              Contact
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
