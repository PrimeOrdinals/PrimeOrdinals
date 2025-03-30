export type WalletType = 'unisat' | 'okx' | 'magiceden';

interface RuneBalance {
  id: string;
  symbol: string;
  amount: number;
  decimal: number;
}

interface WalletInscription {
  id?: string;
  inscriptionId?: string;
  inscriptionNumber?: number;
  address: string;
  output?: string;
  outputValue?: number;
  content?: string;
  contentType?: string;
  timestamp?: number;
}


interface MagicEdenProvider {
  requestAccounts(): Promise<string[]>;
  getOrdinals(): Promise<any[]>;
  sendOrdinal(params: {
    address: string;
    ordinalId: string;
  }): Promise<string>;
}

interface WalletProvider {
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  getBalance: () => Promise<{ confirmed?: number; unconfirmed?: number; total: number }>;
  getInscriptions?: () => Promise<{ total: number; list: WalletInscription[] }>;
  sendInscription?: (address: string, inscriptionId: string) => Promise<string>;
  sendBitcoin: (address: string, amount: number) => Promise<string>;
}

declare global {
  interface Window {
    magiceden?: MagicEdenProvider;
    unisat: WalletProvider & {
      requestAccounts: () => Promise<string[]>;
      getAccounts: () => Promise<string[]>;
      getBalance: () => Promise<{ confirmed: number; unconfirmed: number; total: number }>;
      signMessage: (message: string) => Promise<string>;
      signPsbt: (psbtHex: string) => Promise<string>;
      sendBitcoin: (address: string, amount: number) => Promise<string>;
      getInscriptions: (cursor?: number, size?: number) => Promise<{
        total: number;
        list: Array<{
          inscriptionId: string;
          inscriptionNumber: number;
          address: string;
          outputValue: number;
          content: string;
          contentType: string;
          timestamp: number;
        }>;
      }>;
      sendInscription: (address: string, inscriptionId: string) => Promise<string>;
    };
    btc: WalletProvider & {
      requestAccounts: () => Promise<string[]>;
      getAccounts: () => Promise<string[]>;
      getBalance: () => Promise<{ confirmed: number; unconfirmed: number; total: number }>;
      signMessage: (message: string) => Promise<string>;
      signPsbt: (psbtHex: string) => Promise<string>;
      sendBitcoin: (address: string, amount: number) => Promise<string>;
    };

    okxwallet: {
      bitcoin: WalletProvider & {
        requestAccounts: () => Promise<string[]>;
        getAccounts: () => Promise<string[]>;
        getBalance: () => Promise<{ confirmed: number; unconfirmed: number; total: number }>;
        signMessage: (message: string) => Promise<string>;
        signPsbt: (psbtHex: string) => Promise<string>;
        sendBitcoin: (address: string, amount: number) => Promise<string>;
      };
    };
    ordinalSafe: WalletProvider & {
      requestAccounts: () => Promise<string[]>;
      getAccounts: () => Promise<string[]>;
      getBalance: () => Promise<{ confirmed: number; unconfirmed: number; total: number }>;
      signMessage: (message: string) => Promise<string>;
      signPsbt: (psbtHex: string) => Promise<string>;
      sendBitcoin: (address: string, amount: number) => Promise<string>;
    };
  }
}

export type WalletProvider = 'unisat' | 'xverse' | 'phantom' | 'okx' | 'ordinalsafe';

export interface BRC20Token {
  tick: string;
  amount: string;
}

export type WalletProvider = 'unisat' | 'xverse' | 'phantom' | 'okx' | 'ordinalsafe';
