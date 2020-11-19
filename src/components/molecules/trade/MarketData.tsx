import * as React from "react";

function MarketData() {
  return (
    <div className="bg-customGray-100 rounded py-2 px-6 flex justify-between mt-4">
      <div>
        <h5 className="text-gray-600 text-xxs">Vol(24h)</h5>
        <h2 className="font-medium">57.01 USD</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs">Low(24h)</h5>
        <h2 className="font-medium">57.01 USD</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs">High(24h)</h5>
        <h2 className="font-medium">0.0001772</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs">BTC Available</h5>
        <h2 className="font-medium">57.01</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs">BTC On Hold</h5>
        <h2 className="font-medium">57.01</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs">USDT Available</h5>
        <h2 className="font-medium">57.01</h2>
      </div>
      <div>
        <h5 className="text-gray-600 text-xxs">USDT On Hold</h5>
        <h2 className="font-medium">57.01</h2>
      </div>
    </div>
  );
}

export default MarketData;
