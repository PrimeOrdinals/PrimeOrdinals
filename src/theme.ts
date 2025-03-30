import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      // Bitcoin gold with slight variations
      primary: '#F7931A',    // Bitcoin orange
      primaryLight: '#FFB347', // Lighter orange
      primaryDark: '#E07D16',  // Darker orange
      
      // Price gradient colors
      price: {
        start: '#F7931A',    // Bitcoin orange
        end: '#FFA500',      // Warmer orange
      },
      
      // MagicEden-inspired accent colors
      accent: '#E42575',     // Vibrant pink
      accentLight: '#FF4D94', // Lighter pink
      
      // Rich background colors
      dark: '#0A0B0D',      // Near black
      darker: '#000000',    // Pure black
      light: '#141519',     // Slightly lighter dark
      
      // Blue accent for contrast
      blue: '#3B82F6',      // Bright blue
      blueLight: '#60A5FA', // Light blue
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.dark',
        color: 'whiteAlpha.900',
        backgroundImage: 'radial-gradient(circle at center, brand.light 0%, brand.dark 100%)',
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bgGradient: 'linear(to-r, brand.primary, brand.accent)',
          color: 'white',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(247, 147, 26, 0.4)',
          },
        },
        secondary: {
          bg: 'rgba(20, 21, 25, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid',
          borderColor: 'whiteAlpha.200',
          color: 'white',
          transition: 'all 0.3s ease',
          _hover: {
            bg: 'rgba(20, 21, 25, 0.9)',
            borderColor: 'brand.primary',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    Text: {
      variants: {
        gradient: {
          bgGradient: 'linear(to-r, brand.primary, brand.accent)',
          bgClip: 'text',
          fontWeight: 'bold',
        },
        price: {
          bgGradient: 'linear(to-r, brand.price.start, brand.price.end)',
          bgClip: 'text',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
