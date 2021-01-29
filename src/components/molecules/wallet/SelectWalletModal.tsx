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
  const [temp, setTemp] = useState(false);

  useEffect(() => {
    setType(isConnected ? 1 : 0);
  }, [isConnected]);
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setTemp(prev=>!prev)
    });
  },[])

  return (
    <Modal isOpen={props.isOpen} style={{...customStyle, content:{...customStyle.content
    , width: getWidth()}}}>
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
  if(width > 1300){
    return "45%"
  }
  if(width > 1000&& width<1300){
    return "50%"
  }
  if(width < 1000 && width > 800){
    return "65%"
  }
  if(width < 800 && width > 600){
    return "70%"
  }
  if(width < 600 && width > 400){
    return "90%"
  }
  if(width < 400){
    return "90%"
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
    borderRadius:"5px",
    padding: "10px",
    backgroundColor: "#303030",
    width: getWidth(),
    border: "0 px",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    margin: "auto",
  },
};
