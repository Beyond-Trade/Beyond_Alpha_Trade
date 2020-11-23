import { store } from "../../App";
import { RootState } from "../reducers/Index";
import { MarketPairs } from "../types/ExchangeState";
import {
  GetExchangeInfoType,
  SEARCH_ASSETS,
  SELECT_ASSET_PAIR,
  SET_MARKET_DATA,
} from "./ExchangeActionTypes";

export const selectAssetPair = (
  base: string,
  counter: string,
  baseBalance: number,
  counterBalance: number
): GetExchangeInfoType => {
  return { type: SELECT_ASSET_PAIR, base, counter, baseBalance, counterBalance };
};
export const setMarketData = (data: MarketPairs[]): GetExchangeInfoType => {
  return { type: SET_MARKET_DATA, data };
};
export const searchAsset = (search:string): GetExchangeInfoType => {
  return { type: SEARCH_ASSETS, search };
};

export const selectAssetPairAction = (from: string, to: string) => {
  const state: RootState = store.getState();
  const fromBalance = state.wallet.balances.find((item) => item.name === from);
  const toBalance = state.wallet.balances.find((item) => item.name === to);
  
  store.dispatch(
    selectAssetPair(
      from,
      to,
      fromBalance?.cryptoBalance || 0,
      toBalance?.cryptoBalance || 0
    )
  );
};
