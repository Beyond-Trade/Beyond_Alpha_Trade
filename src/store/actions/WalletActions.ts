import { Balance, Wallet } from "../types/WalletState";
import { GetWalletInfoType, RESET_WALLET_DATA, SAVE_BALANCE_DATA, SAVE_WALLET_DATA, SET_Selected_DATA } from "./WalletActionTypes";


export const saveWalletsInfoAction = (wallets: Wallet[], source: string): GetWalletInfoType => {
    return { type: SAVE_WALLET_DATA, wallets, source, selected: wallets[0], isConnected: true };
};
export const resetWalletsInfoAction = (): GetWalletInfoType => {
    let selected = { BYNBalance: 0, EthBalance: 0, USDbBalance: 0, address: '' }
    return { type: RESET_WALLET_DATA, wallets: [], source: '', selected, isConnected: false };
};
export const SetSelectedWalletAction = (wallet: Wallet): GetWalletInfoType => {
    return { type: SET_Selected_DATA, selected: wallet };
};

export const saveBalanceInfoAction = (balances: Balance[]): GetWalletInfoType => {
    return { type: SAVE_BALANCE_DATA, balances };
};