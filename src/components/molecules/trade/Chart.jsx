import * as React from "react";
import TradingViewWidget from "react-tradingview-widget";

function Chart() {
  return (
    <div className="mt-4 w-full h-chartH">
      <TradingViewWidget symbol="NASDAQ:AAPL" autosize />
    </div>
  );
}

export default Chart;
