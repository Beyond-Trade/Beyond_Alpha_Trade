import React from "react";
interface IProps {
  pair: string;
  change: Number;
  image: string;
  coin: string;
  price: Number;
}

function MarketCard(props:IProps) {
  return (
    <div className="bg-customGray-100 rounded w-full mr-2">
      <div className="bg-gray-300 py-1 px-2 flex justify-between rounded-t">
        <h5 className="text-xs font-semibold text-gray-600">{props.pair}</h5>
        <text className="text-green-500 font-medium text-sm">{props.change} %</text>
      </div>
      <div className="flex justify-between items-center px-2 py-4">
        <img src={props.image} className="h-16" />
        <div className="text-xs font-medium">
          <text>{props.coin}</text>
          <text className="text-blue-600 block mt-2">{props.price}</text>
        </div>
      </div>
    </div>
  );
}

export default MarketCard;
