import { act } from "react-dom/test-utils";
import {
  GetWalletInfoType,
  SAVE_WALLET_DATA,
} from "../actions/WalletActionTypes";
import { WalletState } from "../types/WalletState";

const initialState: WalletState = {
  wallets: [],
  defaultWallet: "",
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
        wallets: action.wallets,
      };
    default:
      return state;
  }
}
