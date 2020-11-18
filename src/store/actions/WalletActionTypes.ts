import { Wallet } from "../types/WalletState"

export const SAVE_WALLET_DATA = "SAVE_WALLET_DATA"

interface SaveWalletData {
    type: typeof SAVE_WALLET_DATA;
    wallets: Wallet[];
}


export type GetWalletInfoType = SaveWalletData