import React from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { initializeWeb3 } from "../../../services/web3.service";

interface IProps {
  text: string;
  image: string;
  type: string;
  onConnected: Function;
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
      className="focus:outline-none flex items-center rounded w-full mt-5"
      onClick={() => {
        connectToWallet(props.type);
      }}
    >
      <div className="w-16 h-16 flex justify-center items-center p-4 rounded-full bg-gray-500">

        <img src={props.image} className="h-full" />

      </div>
      <div
        className="flex justify-center ml-8 bg-white rounded-r text-sm font-medium"
      >
        {props.text}
      </div>
    </button>
  );
}

export default WalletOption;
