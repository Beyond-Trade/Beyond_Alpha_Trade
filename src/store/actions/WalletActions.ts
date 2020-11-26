import Web3 from "web3";
import { Balance, Wallet } from "../types/WalletState";
import { GetWalletInfoType, LOADING_BALANCE_PENDING, RESET_WALLET_DATA, SAVE_BALANCE_DATA, SAVE_WALLET_DATA, SAVE_WEB3_DATA, SET_Selected_DATA } from "./WalletActionTypes";

export const SaveWeb3InfoAction = (source: string,web3:Web3): GetWalletInfoType => {
    return { type: SAVE_WEB3_DATA,web3, source, isConnected: true };
};
export const SetSelectedWalletAction = (wallet: Wallet): GetWalletInfoType => {
    return { type: SET_Selected_DATA, selected: wallet };
};

export const saveWalletsInfoAction = (wallets: Wallet[]): GetWalletInfoType => {
    return { type: SAVE_WALLET_DATA, wallets};
};
export const loadingBalancePending = (): GetWalletInfoType => {
    return { type: LOADING_BALANCE_PENDING };
};

export const resetWalletsInfoAction = (): GetWalletInfoType => {
    let selected = { BYNBalance: 0, EthBalance: 0, USDbBalance: 0, address: '' }
    let web3 = new Web3();
    return { type: RESET_WALLET_DATA, wallets: [], source: '', selected, isConnected: false,web3 };
};


export const saveBalanceInfoAction = (balances: Balance[]): GetWalletInfoType => {
    return { type: SAVE_BALANCE_DATA, balances };
};