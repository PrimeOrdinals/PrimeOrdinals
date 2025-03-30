import axios from 'axios';

interface RuneMarketData {
  symbol: string;
  price: number;  // in sats
  volume24h?: number;
  marketCap?: number;
}

export async function getRuneMarketValue(runeId: string, amount: number): Promise<number> {
  try {
    // Try OKX Runes market data
    const okxResponse = await axios.get(`https://www.okx.com/api/v5/public/runes-market?runeId=${runeId}`);
    if (okxResponse.data?.data?.[0]?.lastPrice) {
      return Number(okxResponse.data.data[0].lastPrice) * amount;
    }

    // Try Unisat Runes market data
    const unisatResponse = await axios.get(`https://api.unisat.io/runes/v1/market/${runeId}`);
    if (unisatResponse.data?.price) {
      return unisatResponse.data.price * amount;
    }

    // Try other Rune indexers for price discovery
    const runeIndexerResponse = await axios.get(`https://api.runealpha.xyz/v1/runes/${runeId}`);
    if (runeIndexerResponse.data?.marketData?.price) {
      return runeIndexerResponse.data.marketData.price * amount;
    }

    // If no market data available, estimate based on mint data
    const mintData = await axios.get(`https://api.runealpha.xyz/v1/runes/${runeId}/mint`);
    if (mintData.data?.supply) {
      // Basic estimation based on supply and activity
      const supply = Number(mintData.data.supply);
      const baseValue = 1000; // 1000 sats base value
      const scarcityMultiplier = Math.max(1, Math.log10(1e8 / supply));
      return Math.floor(baseValue * scarcityMultiplier * amount);
    }

    // Default fallback value
    return 500 * amount; // 500 sats per rune as base value
  } catch (error) {
    console.error('Error fetching rune market value:', error);
    return 500 * amount; // Fallback value
  }
}
