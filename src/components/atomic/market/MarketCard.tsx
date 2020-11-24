import React from "react";
interface IProps {
  pair: string;
  change: string;
  image: string;
  coin: string;
  price: string;
  marginRight: string;
}

function MarketCard(props: IProps) {
  return (
    <div
      className={`bg-customGray-100 rounded mb-4 w-full ${props.marginRight}`}
    >
      <div className="bg-gray-300 py-1 px-2 flex justify-between rounded-t">
        <h5 className="xl:text-xs xxl:text-base font-semibold text-gray-600">
          {props.pair}
        </h5>
        <text className="text-green-500 font-medium xl:text-sm xxl:text-base">
          {props.change}%
        </text>
      </div>
      <div className="flex justify-between items-center px-2 py-4">
        <img src={props.image} alt="img" style={{ height: "50px" }} />
        <div className="xl:text-xs xxl:text-base font-bold">
          <text>{props.coin}</text>
          <text className="text-blue-600 block mt-2">{props.price}</text>
        </div>
      </div>
    </div>
  );
}

export default MarketCard;
