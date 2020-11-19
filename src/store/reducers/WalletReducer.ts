import { act } from "react-dom/test-utils";
import Web3 from "web3";
import {
  GetWalletInfoType,
  RESET_WALLET_DATA,
  SAVE_BALANCE_DATA,
  SAVE_WALLET_DATA,
  SAVE_WEB3_DATA,
  SET_Selected_DATA,

} from "../actions/WalletActionTypes";
import { WalletState, Wallet } from "../types/WalletState";

const initialState: WalletState = {
  web3: new Web3(),
  source: "",
  selected: { BYNBalance: 0, EthBalance: 0, USDbBalance: 0, address: '' },
  wallets: [],
  balances: [],
  isConnected: false,
};

export function walletReducer(
  state = initialState,
  action: GetWalletInfoType
): WalletState {
  switch (action.type) {

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

    case SAVE_WALLET_DATA:
      return {
        ...state,
        wallets: action.wallets,

      };
    case SAVE_BALANCE_DATA:
      return {
        ...state,
        balances: action.balances,
      };

      case RESET_WALLET_DATA:
      return {
        ...state,
        web3: action.web3,
        source: action.source,
        isConnected: action.isConnected,
        wallets: action.wallets,
        selected:action.selected
      };

    default:
      return state;
  }
}
