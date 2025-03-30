import { Button } from '@chakra-ui/react';

const ConnectWallet = () => {
  return (
    <Button
      bg="brand.accent"
      color="white"
      _hover={{ bg: 'brand.accentDark' }}
      size="md"
      px={6}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
