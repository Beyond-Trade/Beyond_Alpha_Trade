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
          className={`focus:outline-none py-1 mx-1 w-full text-center hover:bg-customPink hover:text-black text-xs xxl:text-sm font-medium ${
            index === props.index
              ? " bg-customPink text-black"
              : " bg-gray-300"
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
