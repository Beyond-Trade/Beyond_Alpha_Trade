import React from "react";
import usePairSelection from "../../../hooks/trade/usePairSelection";
import GenericTab from "../../atomic/GenericTab";
import PairData from "./PairData";

function PairTable() {
  const { marketTab, tabs, setMarketTab, marketData, setSelectedPair, search } = usePairSelection();
  return (
    <div className="mt-4 border-2 border-gray-400 overflow-auto px-2 pt-2" style={{height:"89%"}}>
      {/* <GenericTab
        index={marketTab}
        onSelect={setMarketTab}
        tabs={["USDb"]}
      /> */}
      <div className="bg-blackGray text-white text-xs xxl:text-sm flex mb-1 justify-center py-1">USDb</div>
      <PairData data={marketData[marketTab]} search={search} onSelect={setSelectedPair} />
    </div>
  );
}

export default PairTable;
