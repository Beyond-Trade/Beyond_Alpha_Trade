import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { returnLoan } from "../../../../services/loan.service";
import MidSectionTab from "../../../atomic/stake/MidSectionTab";
import Burn from "../../../molecules/stake/Burn";
import Mint from "../../../molecules/stake/Mint";
import Rewards from "../../../molecules/stake/Rewards";
import SwapByn from "../../../molecules/stake/SwapByn";
import Transfer from "../../../molecules/stake/Transfer";
import styles from "./MidSection.module.scss";
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
    <>
      <div className={styles.midSection}>
        <div
          className={tabIndex === 0 ? styles.activeButton : styles.leftButton}
          onClick={() => {
            setTab(0);
            history.push("/stake/get_byn");
          }}
        >
          GET BYN
          <div className="flex xxl:sm xl:text-xs text-xs ">
            ETH{" "}
            <img
              src="/assets/Icons/see details arrow.svg"
              className="mx-2 "
              alt="img"
            ></img>{" "}
            BYN
          </div>
        </div>
        <div
          className={tabIndex === 1 ? styles.activeButton : styles.leftButton}
          onClick={() => {
            setTab(0);
            history.push("/stake/invest");
          }}
        >
          INVEST
          <div className="flex xxl:sm xl:text-xs text-xs ">
            Stake BYN{" "}
            <img
              src="/assets/Icons/see details arrow.svg"
              className="mx-2 "
              alt="img"
            ></img>{" "}
            USDb
          </div>
        </div>
        <div
          className={tabIndex === 2 ? styles.activeButton : styles.leftButton}
          onClick={() => {
            setTab(0);
            history.push("/stake/rewards");
          }}
        >
          REWARDS
          <div className="flex xxl:sm xl:text-xs text-xs text-center ">
          BYN reward for Staking
          </div>
        </div>
        <div className={styles.seprator}></div>
        <div
          className={tabIndex === 4 ? styles.activeButton : styles.rightButton}
          onClick={() => {
            setTab(4);
            history.push("/stake/redeem");
          }}
        >
          REDEEM
          <div className="flex xxl:sm xl:text-xs text-xs ">
            USDb{" "}
            <img
              src="/assets/Icons/see details arrow.svg"
              className="mx-2 "
              alt="img"
            ></img>{" "}
            BYN
          </div>
        </div>
        <div
          className={tabIndex === 3 ? styles.activeButton : styles.rightButton}
          onClick={() => {
            setTab(3);
            history.push("/stake/transfer");
          }}
        >
          TRANSFER
          <div className="flex xxl:sm xl:text-xs text-xs text-center">
          Send to external wallet
          </div>
          
        </div>
      </div>
      <div className="px-8 sm:px-16 md:px-20 xl:px-48 lg:px-48 mt-12">
        {location.pathname === "/stake/get_byn" && <SwapByn />}
        {location.pathname === "/stake/invest" && <Mint />}
        {location.pathname === "/stake/rewards" && <Rewards />}
        {location.pathname === "/stake/transfer" && <Transfer />}
        {location.pathname === "/stake/redeem" && <Burn />}
      </div>
    </>
  );
}

export default MidSection;
