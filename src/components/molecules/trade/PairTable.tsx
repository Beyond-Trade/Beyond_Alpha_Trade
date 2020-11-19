import React, { useState } from "react";
import GenericTab from "../../atomic/GenericTab";
import MarketTop from "../market/MarketTop";
import PairData from "./PairData";

function PairTable() {
  const [index, setIndex] = useState(0)
  return (
    <div className="mt-4">
      <GenericTab
        index={index}
        onSelect={setIndex}
        tabs={["EQUITY", "FOREX", "CRYPTO"]}
      />
      <PairData />
    </div>
  );
}

export default PairTable;
