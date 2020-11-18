import { Balance, Wallet } from "../types/WalletState"

export const SAVE_WALLET_DATA = "SAVE_WALLET_DATA"
export const RESET_WALLET_DATA = "RESET_WALLET_DATA"
export const SET_Selected_DATA = "SET_Selected_DATA"
export const SAVE_BALANCE_DATA = "SAVE_BALANCE_DATA"

interface SaveWalletData {
    type: typeof SAVE_WALLET_DATA;
    source:string;
    selected:Wallet;
    wallets: Wallet[];
    isConnected:boolean;    
}
interface resetWalletData {
    type: typeof RESET_WALLET_DATA;
    source:string;
    selected:Wallet;
    wallets: Wallet[];
    isConnected:boolean;    
}
interface SetSelectedWalletData {
    type: typeof SET_Selected_DATA;
    selected:Wallet;
}
interface SaveBalanceData {
    type: typeof SAVE_BALANCE_DATA;
    balances: Balance[];
}


export type GetWalletInfoType = SaveWalletData | SaveBalanceData | SetSelectedWalletData | resetWalletData