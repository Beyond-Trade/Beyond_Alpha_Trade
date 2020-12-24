import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/Index";
import SelectWallet from "./SelectWallet";
import SelectWalletType from "./SelectWalletType";
interface IProps {
  isOpen: boolean;
  close: Function;
}

function SelectWalletModal(props: IProps) {
  const { isConnected, selected } = useSelector(
    (state: RootState) => state.wallet
  );
  const [typeIndex, setType] = useState(0);

  useEffect(() => {
    setType(isConnected ? 1 : 0);
  }, [isConnected]);

  return (
    <Modal isOpen={props.isOpen} style={customStyle}>
      <button
        onClick={() => props.close()}
        className="focus:outline-none float-right absolute"
        style={{top: "20px", right: "20px"}}
      >
        <img src="/assets/Icons/Cross.svg" />
      </button>
      {typeIndex === 0 && <SelectWalletType onSelect={() => props.close()} />}
      {typeIndex === 1 && <SelectWallet onBack={() => setType(0)} />}
    </Modal>
  );
}

export default SelectWalletModal;




const getWidth = () => {
  const width = window.innerWidth
  console.log('width', width)
  if(width > 1300){
    return "25%"
  }
  if(width > 1000&& width<1300){
    return "30%"
  }
  if(width < 1000 && width > 800){
    return "40%"
  }
  if(width < 800 && width > 600){
    return "50%"
  }
  if(width < 600 && width > 400){
    return "70%"
  }
  if(width < 400){
    return "70%"
  }
}

const customStyle = {
  overlay: {
    backgroundColor: "#00000080",
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius:"20px",
    padding: "10px",
    backgroundColor: "#ffffff",
    width: getWidth(),
    border: "0 px",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    margin: "auto",
  },
};
