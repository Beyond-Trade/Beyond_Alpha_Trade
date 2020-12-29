import React, { ReactNode } from "react";

interface IProps {
  text: string;
  onClick: Function;
  active: boolean;
  activeString:string;
  notActiveString: string;
  activeBorder: string;
  from:string;
  to:string;
  subText:string;
}

function MidSectionTab(props: IProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`focus:outline-none xxl:text-base xl:text-xs text-xs font-bold hover:text-blue-1000 relative mx-4 ${
        props.active ? props.activeString: props.notActiveString
      }`}
    >
      {props.text}
      {props.from && props.to && <div className="flex xxl:xs text-sm font-normal ">({props.from} <img src="/assets/Icons/see details arrow.svg" className="mx-2 " alt="img"></img> {props.to})</div>}
      {props.subText && <div className="flex xxl:xs text-sm font-bold-normal ">({props.subText})</div>}
      {props.active && (
        <div className={`absolute border-b-2 w-8 ${props.activeBorder}`}></div>
      )}
    </button>
  );
}

export default MidSectionTab;
