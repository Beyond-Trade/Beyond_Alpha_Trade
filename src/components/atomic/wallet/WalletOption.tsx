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
      className="focus:outline-none flex justify-center items-center border border border-gray-400  rounded w-full mt-3"
      onClick={() => {
        connectToWallet(props.type);
      }}
    >
      <div className="w-1/3 flex justify-center items-center py-2 rounded-full bg-gray-500">
        <div className="h-full w-1/2 bg-black rounded-full py-2">
        <img src={props.image} className="h-full" />
        </div>
      </div>
      <div
        className="w-2/3 flex justify-center bg-white rounded-r text-sm font-medium"
      >
        {props.text}
      </div>
    </button>
  );
}

export default WalletOption;
