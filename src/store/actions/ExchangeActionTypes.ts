import { MarketPairs } from "../types/ExchangeState";

export const SELECT_ASSET_PAIR = 'SELECT_ASSET_PAIR';
export const SET_MARKET_DATA = 'SET_MARKET_DATA';
export const SEARCH_ASSETS = 'SEARCH_ASSETS';


interface SelectAssetPair {
    type: typeof SELECT_ASSET_PAIR;
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

interface SetMarketData {
    type: typeof SET_MARKET_DATA;
    data: MarketPairs[]
}

interface SearchAssets {
    type: typeof SEARCH_ASSETS;
    search: string
}

export type GetExchangeInfoType = SelectAssetPair | SetMarketData | SearchAssets
