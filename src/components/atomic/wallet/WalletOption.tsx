import React from "react";
interface IProps {
  text: string;
  image: string;
}
function WalletOption(props: IProps) {
  return (
    <button className="focus:outline-none flex border border-blue-300 bg-blue-300 rounded w-full mt-3">
      <div className="py-4 w-24 flex justify-center rounded-l">
        <img src={props.image} className="h-8" />
      </div>
      <div
        className="w-full flex justify-center bg-white rounded-r text-sm font-medium"
        style={{ paddingTop: "24px", paddingBottom: "24px" }}
      >
        {props.text}
      </div>
    </button>
  );
}

export default WalletOption;
