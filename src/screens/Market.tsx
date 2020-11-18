import React from "react";
import MarketCard from "../components/atomic/market/MarketCard";

function Market() {
  return (
    <div className="px-24">
      <div className="mt-12 flex">
        <MarketCard
          coin="POUND"
          price={5600.0}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={2.22}
        />
        <MarketCard
          coin="POUND"
          price={5600.0}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={2.22}
        />
        <MarketCard
          coin="POUND"
          price={5600.0}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={2.22}
        />
        <MarketCard
          coin="POUND"
          price={5600.0}
          pair="GBP/ USDb"
          image="assets/Icons/pound.svg"
          change={2.22}
        />
      </div>
    </div>
  );
}

export default Market;
