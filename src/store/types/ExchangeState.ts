
export interface AssetPair {
    base: string;
    counter: string;
    baseBalance: number;
    counterBalance: number;
    fromRate: number;
    toRate: number;
    fromImage: string;
    toImage: string;
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

export interface Order {
    date: string;
    pair: string;
    buying: string;
    selling: string;
    price: number;
    status: string;
    infoURL: string;
}
export interface Trade {
    tokenSymbol: string;
    tokenName: string;
    amount: number;
    time: string;
    infoURL: string;
    confirmations: string;
    fromAddress: string;
    toAddress: string;
    hash: string;
    blockHeight: string;
}

export interface ExchangeState {
    selectedPair: AssetPair;
    refresh:boolean;
    marketData: MarketPairs[];
    search: string;
    myOrders: Order[];
    updatedSelectedPair:any
}