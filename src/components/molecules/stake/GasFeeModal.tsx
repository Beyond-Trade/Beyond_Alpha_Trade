import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { feesDescription } from "../../../utils/constants";

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
          <img src="assets/Icons/Cross.svg" />
        </button>
      </div>
      <div>
        {gasFees.map((item, index: number) => (
          <button
            onClick={() => props.select(item)}
            className={`focus:outline-none ${props.activeFee===item?'bg-customBlue-200 shadow text-white':'bg-gray-100 hover:bg-gray-200'} rounded py-2 w-full mt-2`}
          >
            {feesDescription[index] + " " + item}
          </button>
        ))}
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
