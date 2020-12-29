import React from "react";
import usePairSelection from "../../../hooks/trade/usePairSelection";
import GenericTab from "../../atomic/GenericTab";
import PairData from "./PairData";

function PairTable() {
  const { marketTab, tabs, setMarketTab, marketData, setSelectedPair, search } = usePairSelection()
  console.log(marketData,"=======>>>>>>>>>>")
  return (
    <div className="mt-4 border  overflow-auto px-2" style={{height: '525px'}}>
      <GenericTab
        index={marketTab}
        onSelect={setMarketTab}
        tabs={["USDb"]}
      />
      <PairData data={marketData[marketTab]} search={search} onSelect={setSelectedPair} />
    </div>
  );
}

export default PairTable;
