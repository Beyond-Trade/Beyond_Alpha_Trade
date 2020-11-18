import { Balance, Wallet } from "../types/WalletState"

export const SAVE_WALLET_DATA = "SAVE_WALLET_DATA"
export const SAVE_BALANCE_DATA = "SAVE_BALANCE_DATA"

interface SaveWalletData {
    type: typeof SAVE_WALLET_DATA;
    source:string;
    selected:Wallet;
    wallets: Wallet[];
    isConnected:boolean;    
}
interface SaveBalanceData {
    type: typeof SAVE_BALANCE_DATA;
    balances: Balance[];
}


export type GetWalletInfoType = SaveWalletData | SaveBalanceData