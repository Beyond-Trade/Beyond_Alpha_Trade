import { Wallet } from "../types/WalletState";
import { GetWalletInfoType, SAVE_WALLET_DATA } from "./WalletActionTypes";


export const saveWalletsInfoAction = (wallets: Wallet[]): GetWalletInfoType => {
    return { type: SAVE_WALLET_DATA, wallets: wallets };
};