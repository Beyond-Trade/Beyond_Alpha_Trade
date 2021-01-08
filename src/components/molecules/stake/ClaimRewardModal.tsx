import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { feesDescription } from "../../../utils/constants";
import GeneralButton from "../../atomic/GeneralButton";

interface IProps {
  isOpen: boolean;
  close: Function;
  submit: Function;
  earlyRedemptionFee:any;
  reward:any;
}

function ClaimRewardModal(props: IProps) {
  return (
    <Modal isOpen={props.isOpen} style={customStyle}>
      <div className="flex justify-end items-center pb-2">
        <button onClick={() => props.close()} className="focus:outline-none">
        {/* <button className="focus:outline-none"> */}
          <img src="/assets/Icons/Cross.svg" />
        </button>
      </div>
      <div className="flex text-center justify-center items-center border-b border-gray-400 pb-2 font-bold">
        Total Reward : {props.reward.toFixed(2)} BYN<br/>
        Early Redumption Fee : {props.earlyRedemptionFee} BYN
          {/* If you are claiming the reward before maturity the EARLY Redemption Fee {props.earlyRedemptionFee} will be deducted. */}
      </div>
      <div className="flex-col text-center items-center pt-2">
        Net Reward : {Number(props.reward - props.earlyRedemptionFee).toFixed(2)} BYN<br/>
          Are you sure you want to continue ?
      </div>
      <div className="flex justify-center content-center">
      <div className="flex justify-center text-center items-center w-4/6 p-4">
      <GeneralButton
          submitting={false}
          submit={() => props.submit()}
          textValue={"YES"}
          otherClasses={`bg-customBlack-500 py-2 w-full mt-2 mr-1`}
        />
        <GeneralButton
          submitting={false}
          submit={() => props.close()}
          textValue={"NO"}
          otherClasses={`bg-customBlack-50 py-2 w-full mt-2 ml-1`}
        />
      </div>
      </div>
    </Modal>
  );
}

export default ClaimRewardModal;





const customStyle = {
  overlay: {
    backgroundColor: "#00000080",
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: "10px",
    backgroundColor: "#ffffff",
    width: "30%",
    border: "0 px",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    margin: "auto",
  },
};
