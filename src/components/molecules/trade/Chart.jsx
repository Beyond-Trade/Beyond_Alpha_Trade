import * as React from "react";

import TradingViewWidget from "react-tradingview-widget";
import { assetChartNames } from "../../../utils/constants";
import { fromPairs } from "lodash";

function Chart({ selectedPair }) {
  return (
    <div className="mt-4 w-full xl:h-chartH xxl:h-chartHXXL">
      <TradingViewWidget
        symbol={`${assetChartNames[selectedPair.counter]}${
          assetChartNames[selectedPair.base]
        }`}
        autosize
      />
    </div>
  );
}

export default Chart;
