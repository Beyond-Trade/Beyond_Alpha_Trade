import * as React from "react";
import { AssetPair } from "../../../store/types/ExchangeState";

interface IProps {
  selectedPair: AssetPair
}

function MarketData(props:any) {
  
  return (
    <div className="border rounded py-2 px-6 flex justify-between whitespace-nowrap overflow-auto mb-4 w-full">
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">Price</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{Number(props.selectedPair.rate).toFixed(2)} USDb</h2>
      </div>
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">Change(24h)</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{(props.updatedSelectedPair.change24h * 100).toFixed(2)} %</h2>
      </div>
      <div>
        <h5 className="text-gray-500 boldText text-xxs xl:text-xxs lg:text-xxs">High(24h)</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{props.updatedSelectedPair.high24h.toFixed(2)} USDb</h2>
      </div>
      <div>
        <h5 className="text-gray-500 text-xxs boldText xl:text-xxs lg:text-xxs">Low(24h)</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{props.updatedSelectedPair.low24h.toFixed(2)} USDb</h2>
      </div>

    </div>
  );
}

export default MarketData;