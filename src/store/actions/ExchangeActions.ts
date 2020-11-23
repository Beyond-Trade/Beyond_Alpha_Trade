import { GetExchangeInfoType, SELECT_ASSET_PAIR } from "./ExchangeActionTypes";

export const selectAssetPair = (
  base: string,
  counter: string
): GetExchangeInfoType => {
  return { type: SELECT_ASSET_PAIR, base, counter };
};
