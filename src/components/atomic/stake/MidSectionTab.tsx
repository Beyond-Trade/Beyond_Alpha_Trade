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
      className={`focus:outline-none xxl:text-base xl:text-xs text-xs font-semibold hover:text-blue-1000 relative mx-4 ${
        props.active ? "text-blue-1000" : "text-gray-700"
      }`}
    >
      {props.text}
      {props.active && (
        <div className="absolute border-b-2 border-blue-1000 w-4"></div>
      )}
    </button>
  );
}

export default MidSectionTab;
