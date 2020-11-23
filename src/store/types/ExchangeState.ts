
export interface AssetPair {
    base: string;
    counter: string;
    baseBalance: number;
    counterBalance: number
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