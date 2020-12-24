import * as React from "react";

interface IProps {
  tabs: string[];
  index: Number;
  onSelect: any;
}

function GenericTab(props: IProps) {
  return (
    <div className="rounded flex justify-between py-2 px-2">
      {props.tabs.map((item, index) => (
        <button
          className={`focus:outline-none py-1 w-full text-center hover:bg-gray-200 hover:text-black text-xs xxl:text-sm font-medium ${
            index === props.index
              ? "bg-gray-200 text-black"
              : " text-gray-500"
          }`}
          onClick={() => props.onSelect(index)}
          style={{
            borderTopLeftRadius: index === 0 ? "5px" : "0px",
            borderTopRightRadius:
              index === props.tabs.length - 1 ? "5px" : "0px",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default GenericTab;
