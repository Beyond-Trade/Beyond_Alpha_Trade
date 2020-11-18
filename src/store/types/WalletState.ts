
export interface Wallet {
    address: string;
    BYNBalance:number, 
    EthBalance:number,
    USDbBalance:number,
}

export interface Balance {
    name: string;
    short: string;
    cryptoBalance: string;
    fiatBalance: string;
    isEther: boolean;
    isSiteToken: boolean;
}

export interface WalletState {
    selected:Wallet,
    source: string; //Metamask etc
    wallets: Wallet[];  // Reset balance is new source
    balances: Balance[] //Current source default wallet balances  
    isConnected: boolean;
}