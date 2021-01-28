import * as React from "react";

interface IProps {
  tabs: string[];
  index: Number;
  onSelect: any;
}

function MarketTopTab(props: IProps) {
  return (
    <div className="rounded flex justify-between py-2">
      {props.tabs.map((item, index) => (
        <button
          className={`focus:outline-none text-black py-2 ${index===0?'mr-1':''} w-full text-center hover:bg-green-500 text-xs xxl:text-sm font-medium ${
            index === props.index
              ? " bg-green-600"
              : " bg-red-600"
          }`}
          onClick={() => props.onSelect(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default MarketTopTab;
