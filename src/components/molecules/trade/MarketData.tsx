import * as React from "react";
import { AssetPair } from "../../../store/types/ExchangeState";

interface IProps {
  selectedPair: AssetPair
}

function MarketData(props:any) {
  
  return (
    <div className="bg-customGray-100 rounded py-2 px-6 flex justify-between whitespace-nowrap overflow-auto mt-4">
      <div>
        <h5 className="text-gray-600 text-xxs font-normal xl:text-xxs lg:text-xxs">Price</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{props.selectedPair.rate} USD</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs font-normal xl:text-xxs lg:text-xxs">Change(24h)</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{(props.updatedSelectedPair.change24h * 100).toFixed(5)} %</h2>
      </div>
      <div>
        <h5 className="text-gray-600 font-normal text-xxs xl:text-xxs lg:text-xxs">High(24h)</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{props.updatedSelectedPair.high24h.toFixed(5)} USD</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs font-normal xl:text-xxs lg:text-xxs">Low(24h)</h5>
        <h2 className="font-medium text-sm xs:text-xs xl:text-base lg:text-base">{props.updatedSelectedPair.low24h.toFixed(5)} USD</h2>
      </div>

    </div>
  );
}

export default MarketData;
