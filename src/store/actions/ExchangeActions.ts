import { store } from "../../App";
import { RootState } from "../reducers/Index";
import { MarketPairs, Order } from "../types/ExchangeState";
import {
  GetExchangeInfoType,
  UPDATE_MY_LAST_ORDER,
  SEARCH_ASSETS,
  SELECT_ASSET_PAIR,
  SET_MARKET_DATA,
  SET_MY_ORDER,
} from "./ExchangeActionTypes";

export const selectAssetPair = (
  base: string,
  counter: string,
  baseBalance: number,
  counterBalance: number,
  fromRate: number,
  toRate: number,
  fromImage: string,
  toImage: string,
  rate: number,
  change24h: number,
  high24h: number,
  low24h: number
): GetExchangeInfoType => {
  return {
    type: SELECT_ASSET_PAIR,
    base,
    counter,
    baseBalance,
    counterBalance,
    fromRate,
    toRate,
    fromImage,
    toImage,
    rate,
    change24h,
    high24h,
    low24h,
  };
};
export const setMarketData = (data: MarketPairs[]): GetExchangeInfoType => {
  return { type: SET_MARKET_DATA, data };
};

export const setMyOrder = (order: Order): GetExchangeInfoType => {
  return { type: SET_MY_ORDER, order };
};

export const updateMyLastOrder = (payload:any): any => {
  return { type: UPDATE_MY_LAST_ORDER, payload };
};

export const searchAsset = (search: string): GetExchangeInfoType => {
  return { type: SEARCH_ASSETS, search };
};

export const selectAssetPairAction = (from: string, to: string, rate:number) => {
  const state: RootState = store.getState();
  const fromBalance = state.wallet.balances.find((item) => item.short === from);
  const toBalance = state.wallet.balances.find((item) => item.short === to);
  store.dispatch(
    selectAssetPair(
      from,
      to,
      fromBalance?.cryptoBalance || 0,
      toBalance?.cryptoBalance || 0,
      fromBalance?.rate||0,
      toBalance?.rate||0,
      fromBalance?.icon||"",
      toBalance?.icon||"",
      rate,
      fromBalance?.change24h||0,
      fromBalance?.high24h||0,
      fromBalance?.low24h||0,
    )
  );
};
