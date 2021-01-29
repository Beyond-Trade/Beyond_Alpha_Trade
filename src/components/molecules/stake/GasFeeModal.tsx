import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { feesDescription } from "../../../utils/constants";
import GeneralButton from "../../atomic/GeneralButton";

interface IProps {
  isOpen: boolean;
  close: Function;
  select: Function;
  activeFee: number
}

function GasFeeModal(props: IProps) {
  const gasFees = [17, 23, 34];
  return (
    <Modal isOpen={props.isOpen} style={customStyle}>
      <div className="flex justify-between items-center border-b border-gray-400 pb-2">
        <h2 className="font-medium">Gas Fee</h2>
        <button onClick={() => props.close()} className="focus:outline-none">
          <img src="/assets/Icons/Cross.svg" />
        </button>
      </div>
      <div>
        <input placeholder="CUSTOM" onChange={(event)=>props.select(event.target.value, false)} className="focus:outline-none border border-gray-300 px-3 rounded py-2 w-full mt-2" />
        {gasFees.map((item, index: number) => (
          <GeneralButton
          submitting={false}
          submit={() => props.select(item, true)}
          textValue={feesDescription[index] + " " + item}
          otherClasses={`${props.activeFee===item?'bg-customPink text-white':'bg-customBlack-50'} py-2 w-full mt-2`}
        />
        ))}
        <GeneralButton
          submitting={false}
          submit={() => props.close()}
          textValue={"Done"}
          otherClasses={`bg-customPink py-2 w-full mt-2`}
        />
      </div>
    </Modal>
  );
}

export default GasFeeModal;





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
