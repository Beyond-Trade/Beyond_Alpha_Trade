
export interface AssetPair {
    base: string;
    counter: string;
}

export interface ExchangeState {
    selectedPair: AssetPair;
}