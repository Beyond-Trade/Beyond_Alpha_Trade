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
  const history = useHistory();
  const [tabIndex, setTab] = useState(0);
  useEffect(() => {
    if (location.pathname === "/stake/get_byn") {
      setTab(0);
    }
    if (location.pathname === "/stake/invest") {
      setTab(1);
    }
    if (location.pathname === "/stake/rewards") {
        setTab(2);
      }
      if (location.pathname === "/stake/transfer") {
        setTab(3);
      }
      if (location.pathname === "/stake/redeem") {
        setTab(4);
      }
  }, [location]);
  return (
    <div className="px-8 sm:px-16 md:px-20 xl:px-48 lg:px-48 mt-12">
      <div className="flex justify-center">
        <MidSectionTab
        notActiveString="text-customBlack-50"
        activeString="text-customBlack-500"
        activeBorder="border-customBlack-500"
          text="Get BYN"
          from="ETH"
          to="BYN"
          subText=""
          onClick={() => {
            setTab(0);
            history.push("/stake/get_byn");
          }}
          active={tabIndex === 0}
        />
        <MidSectionTab
        notActiveString="text-customBlack-50"
        activeString="text-customBlack-500"
        activeBorder="border-customBlack-500"
          text="Invest"
          from="Stake BYN"
          to="USDb"
          subText=""
          onClick={() => {
            setTab(1);
            history.push("/stake/invest");
          }}
          active={tabIndex === 1}
        />
        <MidSectionTab
        notActiveString="text-customBlack-50"
        activeString="text-customBlack-500"
        activeBorder="border-customBlack-500"
          text="Rewards"
          from=""
          to=""
          subText="BYN reward for Staking"
          onClick={() => {
            setTab(2);
            history.push("/stake/rewards");
          }}
          active={tabIndex === 2}
        />
        <MidSectionTab
        notActiveString="text-customBlack-50"
        activeString="text-customBlack-500"
        activeBorder="border-customBlack-500"
          text="Transfer"
          from=""
          to=""
          subText="Send to external wallet"
          onClick={() => {
            setTab(3);
            history.push("/stake/transfer");
          }}
          active={tabIndex === 3}
        />
        <MidSectionTab
        notActiveString="text-customBlack-50"
        activeString="text-customBlack-500"
        activeBorder="border-customBlack-500"
          text="Redeem"
          from="USDb"
          to="BYN"
          subText=""
          onClick={() => {
            setTab(4);
            history.push("/stake/redeem");
          }}
          active={tabIndex === 4}
        />
      </div>
      {location.pathname === "/stake/get_byn" && <SwapByn />}
      {location.pathname === "/stake/invest" && <Mint />}
      {location.pathname === "/stake/rewards" && <Rewards />}
      {location.pathname === "/stake/transfer" && <Transfer />}
      {location.pathname === "/stake/redeem" && <Burn />}
    </div>
  );
}

export default MidSection;
