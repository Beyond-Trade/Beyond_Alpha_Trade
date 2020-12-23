import React from "react";
import usePairSelection from "../../../hooks/trade/usePairSelection";
import GenericTab from "../../atomic/GenericTab";
import PairData from "./PairData";

function PairTable() {
  const { marketTab, tabs, setMarketTab, marketData, setSelectedPair, search } = usePairSelection()
  console.log(marketData,"=======>>>>>>>>>>")
  return (
    <div className="mt-4 bg-customGray-100 overflow-auto" style={{height: '410px'}}>
      <GenericTab
        index={marketTab}
        onSelect={setMarketTab}
        tabs={tabs}
      />
      <PairData data={marketData[marketTab]} search={search} onSelect={setSelectedPair} />
    </div>
  );
}

export default PairTable;
