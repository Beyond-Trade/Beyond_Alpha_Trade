export const SELECT_ASSET_PAIR = 'SELECT_ASSET_PAIR';


interface SelectAssetPair {
    type: typeof SELECT_ASSET_PAIR;
    base: string;
    counter: string;
}

export type GetExchangeInfoType = SelectAssetPair
