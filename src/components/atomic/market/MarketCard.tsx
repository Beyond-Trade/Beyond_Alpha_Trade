import React from "react";
interface IProps {
  pair: string;
  change: string;
  image: string;
  coin: string;
  price: string;
  marginRight: string;
  click: any;
  graph: string;
  volume: string;
}

function MarketCard(props: IProps) {

  return (
    <div
      className={`border-2 border-gray-500 rounded-lg px-5 py-8 mb-4 w-full cursor-pointer ${props.marginRight}`}
      onClick={props.click}
    >
      <div className="flex justify-between border-b-2 border-gray-400">
        <div>
      <img src={props.image} alt="img" className="h-6 xxl:h-10" />
      <h5 className="text-sm font-semibold mt-4 xxl:text-base text-blackGray">
          {props.pair}
        </h5>
        <h5 className="text-sm font-semibold xxl:text-base text-gray-600">
          Change: {<text className={`${Number(props.change)>0?'text-green-700':'text-red-700'}`}>{props.change}%</text>}
        </h5>
      </div>
      <img src={props.graph} alt="img" className="h-6 xxl:h-10" />
      </div>
      <div className="flex justify-between text-gray-500 text-sm font-semibold xxl:text-base">
        <text>Value</text>
        <text>24H Volume</text>
      </div>
      <div className="flex justify-between text-blackGray text-sm font-semibold xxl:text-base">
        <text>${props.price}</text>
        <text>{props.volume}</text>
      </div>
    </div>
  );
}

export default MarketCard;

/**
 *       <div className="border-b border-gray-400 py-1 px-2 flex justify-between rounded-t">
        <h5 className="text-xs xxl:text-sm font-semibold text-gray-600">
          {props.pair}
        </h5>
        <text
          className={`font-medium text-sm xxl:text-base ${
            +props.change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {props.change}%
        </text>
      </div>
      <div className="flex justify-between items-center p-3 px-2 xxl:px-4 py-4 xxl:py-6">
        <img src={props.image} alt="img" className="h-10 xxl:h-16" />
        <div className="text-xs xxl:text-base font-bold">
          <text>{props.coin}</text>
          <text className=" block mt-2">{props.price}</text>
        </div>
      </div>
 */