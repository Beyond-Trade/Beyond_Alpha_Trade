
export interface Wallet {
    BYNBalance: string;
    ETHBalance: number;
    address: string;
    source: string;
}

export interface WalletState {
    wallets: Wallet[];
    defaultWallet: string;
    isConnected: boolean;
}