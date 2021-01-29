import * as React from "react";

interface IProps {
  tabs: string[];
  index: Number;
  onSelect: any;
}

function MarketTab(props: IProps) {
  return (
    <div className="flex justify-between py-2 overflow-auto">
      {props.tabs.map((item, index) => (
        <button
          className={`focus:outline-none py-1 mx-3 w-full text-center hover:bg-darkGray hover:text-white text-xs xxl:text-sm font-medium ${
            index === props.index
              ? " bg-lightGray text-white"
              : " border border-lightGray"
          }`}
          onClick={() => props.onSelect(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default MarketTab;