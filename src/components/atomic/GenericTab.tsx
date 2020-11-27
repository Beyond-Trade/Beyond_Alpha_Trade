import * as React from "react";

interface IProps {
  tabs: string[];
  index: Number;
  onSelect: any;
}

function GenericTab(props: IProps) {
  return (
    <div className="rounded flex justify-between">
      {props.tabs.map((item, index) => (
        <button
          className={`focus:outline-none py-2 w-full text-center hover:bg-gray-300 hover:text-gray-600 text-xs xxl:text-sm font-medium ${
            index === props.index
              ? "bg-gray-300 text-gray-600"
              : "bg-customGray-100 text-gray-600"
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
