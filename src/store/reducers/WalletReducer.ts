import { act } from "react-dom/test-utils";
import {
  GetWalletInfoType,
  SAVE_BALANCE_DATA,
  SAVE_WALLET_DATA,
} from "../actions/WalletActionTypes";
import { WalletState, Wallet } from "../types/WalletState";

const initialState: WalletState = {
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
    case SAVE_WALLET_DATA:
      return {
        ...state,
        source: action.source,
        wallets: action.wallets,
        selected: action.selected,
        isConnected: action.isConnected,
      };
    case SAVE_BALANCE_DATA:
      return {
        ...state,
        balances: action.balances,
      };
    default:
      return state;
  }
}
