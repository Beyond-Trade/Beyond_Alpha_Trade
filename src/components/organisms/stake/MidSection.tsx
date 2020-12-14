import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { returnLoan } from "../../../services/loan.service";
import MidSectionTab from "../../atomic/stake/MidSectionTab";
import Burn from "../../molecules/stake/Burn";
import Mint from "../../molecules/stake/Mint";
import Rewards from "../../molecules/stake/Rewards";
import SwapByn from "../../molecules/stake/SwapByn";
import Transfer from "../../molecules/stake/Transfer";

function MidSection() {
  const location = useLocation();
  console.log(location.pathname, "<<<<<<<<<<<<<<<<<");
  const history = useHistory();
  const [tabIndex, setTab] = useState(0);
  useEffect(() => {
    if (location.pathname === "/stake/swap_byn") {
      setTab(0);
    }
    if (location.pathname === "/stake/rewards") {
        setTab(2);
      }
  }, [location]);
  return (
    <div className="px-8 sm:px-16 md:px-20 xl:px-48 lg:px-48 mt-12">
      <div className="flex justify-center">
        <MidSectionTab
          text="Swap BYN"
          onClick={() => {
            setTab(0);
            history.push("/stake/swap_byn");
          }}
          active={tabIndex === 0}
        />
        <MidSectionTab
          text="Mint"
          onClick={() => {
            setTab(1);
            history.push("/stake/mint");
          }}
          active={tabIndex === 1}
        />
        <MidSectionTab
          text="Rewards"
          onClick={() => {
            setTab(2);
            history.push("/stake/rewards");
          }}
          active={tabIndex === 2}
        />
        <MidSectionTab
          text="Transfer"
          onClick={() => {
            setTab(3);
            history.push("/stake/transfer");
          }}
          active={tabIndex === 3}
        />
        <MidSectionTab
          text="Burn"
          onClick={() => {
            setTab(4);
            history.push("/stake/burn");
          }}
          active={tabIndex === 4}
        />
      </div>
      {location.pathname === "/stake/swap_byn" && <SwapByn />}
      {location.pathname === "/stake/mint" && <Mint />}
      {location.pathname === "/stake/rewards" && <Rewards />}
      {location.pathname === "/stake/transfer" && <Transfer />}
      {location.pathname === "/stake/burn" && <Burn />}
    </div>
  );
}

export default MidSection;
