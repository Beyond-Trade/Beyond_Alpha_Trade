import { TradePairsLookup } from "../../services/trade.service";
import {
  GetExchangeInfoType,
  SEARCH_ASSETS,
  SELECT_ASSET_PAIR,
  SET_MARKET_DATA,
} from "../actions/ExchangeActionTypes";
import { ExchangeState } from "../types/ExchangeState";

const initialState: ExchangeState = {
  selectedPair: {
    base: TradePairsLookup[0].marketCoin,
    counter: TradePairsLookup[0].pairs[0].coin,
    baseBalance: 0,
    counterBalance: 0,
    fromRate: 0,
    toRate: 0,
    rate: 0,
    change24h: 0,
    high24h: 0,
    low24h: 0
  },
  marketData: TradePairsLookup,
  search: ""
};

export function exchangeReducer(
  state = initialState,
  action: GetExchangeInfoType
): ExchangeState {
  switch (action.type) {
    case SELECT_ASSET_PAIR:
      return {
        ...state,
        selectedPair: {
          base: action.base,
          counter: action.counter,
          baseBalance: action.baseBalance,
          counterBalance: action.counterBalance,
          fromRate: action.fromRate,
          toRate: action.toRate,
          rate: action.rate,
          change24h: action.change24h,
          high24h: action.high24h,
          low24h: action.low24h
        },
      };
    case SET_MARKET_DATA:
      return {
        ...state,
        marketData: action.data,
      };
    case SEARCH_ASSETS:
      return {
        ...state,
        search: action.search,
      }
    default:
      return state;
  }
}