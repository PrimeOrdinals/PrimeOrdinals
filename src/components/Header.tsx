'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure
} from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import ConnectWallet from './ConnectWallet';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="header"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      bg="rgba(17, 25, 40, 0.4)"
      backdropFilter="blur(20px)"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center" wrap="nowrap">
          {/* Left section: Logo and Mobile Menu */}
          <HStack spacing={{ base: 2, md: 8 }}>
            {/* Mobile Menu */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              color="whiteAlpha.900"
              _hover={{ color: '#FF3366' }}
              onClick={onOpen}
            />

            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                bgGradient="linear(to-r, #F7931A, #FF3366)"
                bgClip="text"
                whiteSpace="nowrap"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-1px)',
                  textShadow: '0 0 8px rgba(247, 147, 26, 0.3)'
                }}
                transition="all 0.2s"
              >
                Prime Ordinals
              </Text>
            </Link>

            {/* Desktop Navigation */}
            <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
              <Button
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{ color: '#FF3366' }}
                size="sm"
              >
                Explore
              </Button>
              <Button
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{ color: '#FF3366' }}
                size="sm"
              >
                Collections
              </Button>
            </HStack>
          </HStack>

          {/* Right section: Search and Connect Wallet */}
          <HStack spacing={{ base: 2, md: 6 }} flex={1} justify="flex-end">
            <InputGroup maxW={{ base: '140px', sm: '200px', md: '300px' }}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="whiteAlpha.500" />
              </InputLeftElement>
              <Input
                placeholder="Search..."
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _placeholder={{ color: 'whiteAlpha.500' }}
                _hover={{ borderColor: 'whiteAlpha.300' }}
                _focus={{ borderColor: '#FF3366', boxShadow: 'none' }}
                fontSize={{ base: 'sm', md: 'md' }}
                size="sm"
              />
            </InputGroup>
            <Box>
              <ConnectWallet />
            </Box>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay bg="rgba(0, 0, 0, 0.8)" backdropFilter="blur(8px)" />
        <DrawerContent
          bg="linear-gradient(169.4deg, rgba(57, 31, 105, 0.93) -6.8%, rgba(31, 39, 75, 0.95) 55.2%, rgba(17, 25, 40, 0.94) 78.9%)"
          borderRight="1px solid rgba(255, 255, 255, 0.1)"
        >
          <DrawerCloseButton color="whiteAlpha.800" _hover={{ color: '#FF3366' }} />
          <DrawerHeader
            borderBottom="1px solid rgba(255, 255, 255, 0.1)"
            bgGradient="linear(to-r, #F7931A, #FF3366)"
            bgClip="text"
          >
            Menu
          </DrawerHeader>
          <DrawerBody py={4}>
            <VStack spacing={4} align="stretch">
              <Button
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{
                  bg: 'whiteAlpha.50',
                  color: '#FF3366',
                }}
                fontSize="lg"
                justifyContent="flex-start"
                onClick={onClose}
                leftIcon={<Box w="4px" h="4px" borderRadius="full" bg="currentColor" />}
              >
                Explore
              </Button>
              <Button
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{
                  bg: 'whiteAlpha.50',
                  color: '#FF3366',
                }}
                fontSize="lg"
                justifyContent="flex-start"
                onClick={onClose}
                leftIcon={<Box w="4px" h="4px" borderRadius="full" bg="currentColor" />}
              >
                Collections
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
