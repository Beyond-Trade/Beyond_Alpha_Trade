import { FmPayloadMethod } from "fortmatic";
import { stat } from "fs";
import { TradePairsLookup } from "../../services/trade.service";
import {
  GetExchangeInfoType,
  SEARCH_ASSETS,
  SELECT_ASSET_PAIR,
  SET_MARKET_DATA,
  SET_MY_ORDER,
  UPDATE_MY_LAST_ORDER,
  UPDATE_SELECT_ASSET_PAIR,
  SET_TRANSATIONS,
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
    fromImage: "",
    toImage: "",
    rate: 0,
    change24h: 0,
    high24h: 0,
    low24h: 0,
    volume24h:0,
  },
  transationsHistory: [],
  marketData: TradePairsLookup,
  search: "",
  myOrders: [],
  refresh: false,
  updatedSelectedPair: {
    change24h: 0,
    high24h: 0,
    low24h: 0,
  },
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
          fromImage: action.fromImage,
          toImage: action.toImage,
          rate: action.rate,
          change24h: action.change24h,
          high24h: action.high24h,
          low24h: action.low24h,
          volume24h:action.volume24h,
        },
      };
    case UPDATE_SELECT_ASSET_PAIR:
      return {
        ...state,
        updatedSelectedPair: {
          ...state.selectedPair,
          change24h: action.payload.change,
          high24h: action.payload.high,
          low24h: action.payload.low,
        },
      };
    case SET_TRANSATIONS:
      return {
        ...state,
        transationsHistory: [...state.transationsHistory, ...action.payload],
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
      };
    case SET_MY_ORDER:
      return {
        ...state,
        myOrders: [...state.myOrders, action.order],
      };
    case UPDATE_MY_LAST_ORDER:
      const newArray = [...state.myOrders]; //making a new array
      newArray[state.myOrders.length - 1].date = action.payload.date;
      newArray[state.myOrders.length - 1].status = action.payload.status; //changing value in the new array
      newArray[state.myOrders.length - 1].infoURL = action.payload.infoURL;
      return {
        ...state,
        myOrders: newArray,
      };
    default:
      return state;
  }
}
