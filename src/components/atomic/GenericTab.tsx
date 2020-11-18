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
          className={`focus:outline-none py-2 w-full text-center ${
            index === props.index ? "bg-gray-300" : "bg-customGray-100"
          }`}
          onClick={()=>props.onSelect(index)}
        >{item}</button>
      ))}
    </div>
  );
}

export default GenericTab;
