import { MarketPairs, Order } from "../types/ExchangeState";

export const SELECT_ASSET_PAIR = 'SELECT_ASSET_PAIR';
export const SET_MARKET_DATA = 'SET_MARKET_DATA';
export const SEARCH_ASSETS = 'SEARCH_ASSETS';
export const SET_MY_ORDER = 'SET_MY_ORDER';
export const UPDATE_MY_LAST_ORDER='UPDATE_MY_LAST_ORDER';
export const UPDATE_SELECT_ASSET_PAIR='UPDATE_SELECT_ASSET_PAIR';

interface SelectAssetPair {
    type: typeof SELECT_ASSET_PAIR;
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

interface SetMarketData {
    type: typeof SET_MARKET_DATA;
    data: MarketPairs[]
}

interface SetMyOrder {
    type: typeof SET_MY_ORDER;
    order: Order
}
interface UpdateOrder {
    type: typeof UPDATE_MY_LAST_ORDER;
    payload: any
}
interface SearchAssets {
    type: typeof SEARCH_ASSETS;
    search: string
}
interface UpdateSelectedPair {
    type: typeof UPDATE_SELECT_ASSET_PAIR;
    payload: any
}


export type GetExchangeInfoType = SelectAssetPair | SetMarketData | SearchAssets | SetMyOrder | UpdateOrder | UpdateSelectedPair
