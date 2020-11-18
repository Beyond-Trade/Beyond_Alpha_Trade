import React from 'react';
import Modal from "react-modal";
import WalletOption from '../../atomic/wallet/WalletOption';
import SelectWalletType from './SelectWalletType';
interface IProps {
    isOpen: boolean;
    close: Function;
}

function SelectWalletModal(props:IProps) {
    return (
        <Modal isOpen={props.isOpen} style={customStyle}>
            <button onClick={()=>props.close()} className="focus:outline-none float-right"><img src="assets/Icons/Cross.svg" /></button>
            <SelectWalletType />
        </Modal>
    )
}

export default SelectWalletModal

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