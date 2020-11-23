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
