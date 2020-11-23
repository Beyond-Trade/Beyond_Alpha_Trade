import { fromPairs } from "lodash";
import * as React from "react";
import TradingViewWidget from "react-tradingview-widget";
import {assetChartNames} from '../../../utils/constants'

function Chart({selectedPair}) {

  return (
    <div className="mt-4 w-full h-chartH">
      <TradingViewWidget symbol={`${assetChartNames[selectedPair.counter]}${assetChartNames[selectedPair.base]}`} autosize />
    </div>
  );
}

export default Chart;
