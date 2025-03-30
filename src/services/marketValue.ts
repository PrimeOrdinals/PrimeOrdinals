import axios from 'axios';
import https from 'https';

// Configure axios with SSL settings
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false // Note: Only use this in development
  })
});

interface MarketPrice {
  floorPrice?: number;  // in sats
  lastSalePrice?: number;  // in sats
  estimatedValue: number;  // in sats
}

export async function getInscriptionMarketValue(inscriptionId: string): Promise<MarketPrice> {
  try {
    // Try Ordinals Market API first
    const ordinalsMarketUrl = `https://api.ordinalsmarket.com/inscription/${inscriptionId}`;
    const ordinalsResponse = await axiosInstance.get(ordinalsMarketUrl).catch(error => {
      console.warn('OrdinalsMarket API error:', error.message);
      return { data: null };
    });
    
    if (ordinalsResponse.data?.floor_price || ordinalsResponse.data?.last_sale) {
      return {
        floorPrice: ordinalsResponse.data.floor_price,
        lastSalePrice: ordinalsResponse.data.last_sale,
        estimatedValue: ordinalsResponse.data.floor_price || ordinalsResponse.data.last_sale
      };
    }

    // Try Magic Eden API as backup
    const magicEdenUrl = `https://api-mainnet.magiceden.io/v2/ordinals/inscription/${inscriptionId}`;
    const meResponse = await axiosInstance.get(magicEdenUrl).catch(error => {
      console.warn('Magic Eden API error:', error.message);
      return { data: null };
    });
    
    if (meResponse.data?.stats?.floorPrice || meResponse.data?.lastSale?.price) {
      return {
        floorPrice: meResponse.data.stats?.floorPrice,
        lastSalePrice: meResponse.data.lastSale?.price,
        estimatedValue: meResponse.data.stats?.floorPrice || meResponse.data.lastSale?.price
      };
    }

    // Try Gamma.io API as another backup
    const gammaUrl = `https://api.gamma.io/ordinals/v1/inscriptions/${inscriptionId}`;
    const gammaResponse = await axiosInstance.get(gammaUrl).catch(error => {
      console.warn('Gamma API error:', error.message);
      return { data: null };
    });
    
    if (gammaResponse.data?.collection?.floor_price || gammaResponse.data?.last_sale_price) {
      return {
        floorPrice: gammaResponse.data.collection?.floor_price,
        lastSalePrice: gammaResponse.data.last_sale_price,
        estimatedValue: gammaResponse.data.collection?.floor_price || gammaResponse.data.last_sale_price
      };
    }

    // If no market data found, use collection-based estimation
    const collectionData = await getCollectionFloorPrice(inscriptionId);
    if (collectionData.estimatedValue > 0) {
      return collectionData;
    }

    // Default fallback value if no data available
    return {
      estimatedValue: 50000 // 50k sats as base value
    };
  } catch (error) {
    console.error('Error fetching market value:', error);
    return {
      estimatedValue: 50000 // 50k sats as fallback
    };
  }
}

async function getCollectionFloorPrice(inscriptionId: string): Promise<MarketPrice> {
  try {
    // Try to get collection info from various marketplaces
    const [ordinalsMarket, magicEden, gamma] = await Promise.allSettled([
      axiosInstance.get(`https://api.ordinalsmarket.com/collection/${inscriptionId}`).catch(() => ({ data: null })),
      axiosInstance.get(`https://api-mainnet.magiceden.io/v2/ordinals/collections`).catch(() => ({ data: null })),
      axiosInstance.get(`https://api.gamma.io/ordinals/v1/collections`).catch(() => ({ data: null }))
    ]);

    let floorPrice = 0;

    // Check OrdinalsMarket data
    if (ordinalsMarket.status === 'fulfilled' && ordinalsMarket.value.data?.floor_price) {
      floorPrice = ordinalsMarket.value.data.floor_price;
    }
    // Check Magic Eden data
    else if (magicEden.status === 'fulfilled' && magicEden.value.data?.floor_price) {
      floorPrice = magicEden.value.data.floor_price;
    }
    // Check Gamma.io data
    else if (gamma.status === 'fulfilled' && gamma.value.data?.floor_price) {
      floorPrice = gamma.value.data.floor_price;
    }

    return {
      floorPrice,
      estimatedValue: floorPrice || 50000
    };
  } catch (error) {
    console.error('Error fetching collection floor price:', error);
    return {
      estimatedValue: 50000
    };
  }
}
