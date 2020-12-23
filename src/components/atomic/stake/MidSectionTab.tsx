import React, { ReactNode } from "react";

interface IProps {
  text: string;
  onClick: Function;
  active: boolean;
  activeString:string;
  notActiveString: string;
  activeBorder: string;
}

function MidSectionTab(props: IProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`focus:outline-none xxl:text-base xl:text-xs text-xs font-semibold hover:text-blue-1000 relative mx-4 ${
        props.active ? props.activeString: props.notActiveString
      }`}
    >
      {props.text}
      {props.active && (
        <div className={`absolute border-b-2 w-4 ${props.activeBorder}`}></div>
      )}
    </button>
  );
}

export default MidSectionTab;
