import PairSearch from "../../atomic/trade/PairSearch";
import PairTable from "./PairTable";
import React from "react";

function PairSelection() {
  return (
    <div className="xl:w-74 lg:w-74 xxl:w-94">
      <PairSearch />
      <PairTable />
    </div>
  );
}

export default PairSelection;
