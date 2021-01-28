import React from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { initializeWeb3 } from "../../../services/web3.service";

interface IProps {
  text: string;
  image: string;
  type: string;
  onConnected: Function;
  style:string
}
function WalletOption(props: IProps) {
  const dispatch = useDispatch();
  const alert = useAlert();

  const connectToWallet = async (value: any): Promise<any> => {
    props.onConnected();
    await initializeWeb3(value).catch((e) => {
      alert.show("Provider is not available", { type: "error" });
    });
  };
  return (
    <button
      className={`focus:outline-none items-center flex flex-col py-8 w-full items-center rounded-lg bg-gray-600 mt-5 ${props.style}`}
      onClick={() => {
        connectToWallet(props.type);
      }}
    >

        <img src={props.image} className="h-full" />

      <div
        className="text-sm font-medium text-white"
      >
        {props.text}
      </div>
    </button>
  );
}

export default WalletOption;
