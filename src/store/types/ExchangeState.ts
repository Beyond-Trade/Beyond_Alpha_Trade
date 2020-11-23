
export interface AssetPair {
    base: string;
    counter: string;
    baseBalance: number;
    counterBalance: number;
    fromRate: number;
    toRate: number;
    rate: number;
    change24h: number;
    high24h: number;
    low24h: number;
}

export interface MarketPair {
    coin: string;
    rate: number;
}

export interface MarketPairs {
    marketCoin: string;
    pairs: MarketPair[];
}

export interface ExchangeState {
    selectedPair: AssetPair;
    marketData: MarketPairs[];
    search: string;
}