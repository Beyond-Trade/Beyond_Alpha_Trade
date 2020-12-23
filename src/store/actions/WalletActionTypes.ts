import Web3 from "web3";
import { Balance, Wallet } from "../types/WalletState";

export const SAVE_WALLET_DATA = "SAVE_WALLET_DATA";
export const RESET_WALLET_DATA = "RESET_WALLET_DATA";
export const SET_Selected_DATA = "SET_Selected_DATA";
export const SAVE_BALANCE_DATA = "SAVE_BALANCE_DATA";
export const SAVE_WEB3_DATA = "SAVE_WEB3_DATA";
export const LOADING_BALANCE_PENDING = "LOADING_BALANCE_PENDING";
export const UPDATE_STACK_BALANCE = "UPDATE_STACK_BALANCE";
export const SAVE_C_RATIO = "SAVE_C_RATIO";
export const SAVE_TARGET_C_RATIO = "SAVE_TARGET_C_RATIO";

interface saveCRatio {
  type: typeof SAVE_C_RATIO;
  payload: any;
}
interface saveTagetCRatio {
  type: typeof SAVE_TARGET_C_RATIO;
  payload: any;
}
interface updateStackBalances {
  type: typeof UPDATE_STACK_BALANCE;
  stackedBYN: number;
  unstacked: number;
  totalByn: number;
}
interface SaveWeb3Data {
  type: typeof SAVE_WEB3_DATA;
  web3: Web3;
  isConnected: boolean;
  source: string;
}
interface SetSelectedWalletData {
  type: typeof SET_Selected_DATA;
  selected: Wallet;
}
interface SaveWalletData {
  type: typeof SAVE_WALLET_DATA;
  wallets: Wallet[];
}
interface LoadingBalancePending {
  type: typeof LOADING_BALANCE_PENDING;
}
interface resetWalletData {
  type: typeof RESET_WALLET_DATA;
  source: string;
  selected: Wallet;
  wallets: Wallet[];
  isConnected: boolean;
  web3: Web3;
}
interface SaveBalanceData {
  type: typeof SAVE_BALANCE_DATA;
  balances: Balance[];
}

export type GetWalletInfoType =
  | SaveWalletData
  | LoadingBalancePending
  | SaveBalanceData
  | SetSelectedWalletData
  | resetWalletData
  | SaveWeb3Data
  | updateStackBalances
  | saveCRatio
  | saveTagetCRatio;
