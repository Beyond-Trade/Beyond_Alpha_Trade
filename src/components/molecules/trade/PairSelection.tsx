import PairSearch from "../../atomic/trade/PairSearch";
import PairTable from "./PairTable";
import React from "react";

function PairSelection() {
  return (
    <div className="w-full sm:ml-4 lg:ml-0 lg:w-74 xxl:w-94 order-2 lg:order-1">
      {/* <PairSearch /> */}
      <PairTable />
    </div>
  );
}

export default PairSelection;
