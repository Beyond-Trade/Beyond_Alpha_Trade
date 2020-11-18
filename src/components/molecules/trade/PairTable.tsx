import React, { useState } from "react";
import GenericTab from "../../atomic/GenericTab";
import MarketTop from "../market/MarketTop";

function PairTable() {
  const [index, setIndex] = useState(0)
  return (
    <div className="mt-4" style={{ width: "220px" }}>
      <GenericTab
        index={index}
        onSelect={setIndex}
        tabs={["EQUITY", "FOREX", "CRYPTO"]}
      />
      <MarketTop />
    </div>
  );
}

export default PairTable;
