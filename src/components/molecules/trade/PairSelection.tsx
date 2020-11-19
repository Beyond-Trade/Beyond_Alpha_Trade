import React from "react";
import PairSearch from "../../atomic/trade/PairSearch";
import PairTable from "./PairTable";

function PairSelection() {
  return (
    <div className="xl:w-74 lg:w-74">
      <PairSearch />
      <PairTable />
    </div>
  );
}

export default PairSelection;
