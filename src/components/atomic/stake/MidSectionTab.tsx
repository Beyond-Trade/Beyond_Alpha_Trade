import React, { ReactNode } from "react";

interface IProps {
  text: string;
  onClick: Function;
  active: boolean;
}

function MidSectionTab(props: IProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`focus:outline-none text-xs font-semibold relative mx-4 ${props.active ? "text-blue-300" : "text-gray-700"}`}
    >
      {props.text}
      {props.active&&<div className="absolute border-b-2 border-blue-300 w-4"></div>}
    </button>
  );
}

export default MidSectionTab;
