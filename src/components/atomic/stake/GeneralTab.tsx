import React from "react";
import { createTextSpanFromBounds } from "typescript";

interface IProps {
  tabs: string[];
  onClick: Function;
  index: Number;
}

function GeneralTab(props: IProps) {
  return (
    <div className="flex">
      {props.tabs.map((tab, index) => (
        <button
          className={`focus:outline-none w-full font-medium flex justify-center py-1 text-xs mt-6 ${
            index === props.index
              ? "bg-blue-300 text-white"
              : "bg-gray-300 text-gray-400"
          }`}
          style={{
            borderTopLeftRadius: index === 0 ? "6px" : "0px",
            borderBottomLeftRadius: index === 0 ? "6px" : "0px",
            borderTopRightRadius:
              index === createTextSpanFromBounds.length - 1 ? "6px" : "0px",
            borderBottomRightRadius:
              index === createTextSpanFromBounds.length - 1 ? "6px" : "0px",
          }}
          onClick={() => props.onClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default GeneralTab;
