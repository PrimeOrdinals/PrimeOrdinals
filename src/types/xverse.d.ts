declare interface XverseProvider {
  connect(): Promise<{
    addresses: Array<{
      address: string;
      publicKey: string;
    }>;
  }>;
  getAddresses(): Promise<string[]>;
  getOrdinals(): Promise<any[]>;
  sendOrdinal(params: {
    address: string;
    ordinalId: string;
  }): Promise<string>;
}

declare global {
  interface Window {
    BitcoinProvider: XverseProvider;
  }
}

export {};
