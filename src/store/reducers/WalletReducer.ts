import { act } from "react-dom/test-utils";
import Web3 from "web3";
import {
  GetWalletInfoType,
  LOADING_BALANCE_PENDING,
  RESET_WALLET_DATA,
  SAVE_BALANCE_DATA,
  SAVE_WALLET_DATA,
  SAVE_WEB3_DATA,
  SET_Selected_DATA,
  UPDATE_STACK_BALANCE,
  SAVE_C_RATIO,
  SAVE_TARGET_C_RATIO
} from "../actions/WalletActionTypes";
import { WalletState, Wallet } from "../types/WalletState";

const initialState: WalletState = {
  stackedBYN:0,
  unstacked:0,
  totalByn:0,
  web3: new Web3(),
  currentCRatio:0,
  targetCRatio:0,
  source: "",
  selected: { BYNBalance: 0, EthBalance: 0, USDbBalance: 0, address: "" },
  wallets: [],
  balances: [],
  isConnected: false,
  loadingBalance: false,
};

export function walletReducer(
  state = initialState,
  action: GetWalletInfoType
): WalletState {
  switch (action.type) {
    case SAVE_C_RATIO:
      return{
        ...state,
        currentCRatio:action.payload | 0
      }
      case SAVE_TARGET_C_RATIO:
      return{
        ...state,
        targetCRatio:action.payload | 0
      }
    case UPDATE_STACK_BALANCE:
      return {
        ...state,
        stackedBYN: action.stackedBYN,
        unstacked: action.unstacked,
        totalByn: action.totalByn,
      };
    case SAVE_WEB3_DATA:
      return {
        ...state,
        web3: action.web3,
        source: action.source,
        isConnected: action.isConnected,
      };

    case SET_Selected_DATA:
      return {
        ...state,
        selected: action.selected,
      };

    case LOADING_BALANCE_PENDING:
      return {
        ...state,
        loadingBalance: true,
      };

    case SAVE_WALLET_DATA:
      return {
        ...state,
        wallets: action.wallets,
      };

    case SAVE_BALANCE_DATA:
      return {
        ...state,
        balances: action.balances,
        loadingBalance: false
      };

    case RESET_WALLET_DATA:
      return {
        ...state,
        web3: action.web3,
        source: action.source,
        isConnected: action.isConnected,
        wallets: action.wallets,
        selected: action.selected,
      };

    default:
      return state;
  }
}
