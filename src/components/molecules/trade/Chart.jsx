import * as React from "react";
import TradingViewWidget from "react-tradingview-widget";

function Chart({selectedPair}) {
  return (
    <div className="mt-4 w-full h-chartH">
      <TradingViewWidget symbol={`${selectedPair.counter.slice(0, -1)}${selectedPair.base.slice(0, -1)}`} autosize />
    </div>
  );
}

export default Chart;
