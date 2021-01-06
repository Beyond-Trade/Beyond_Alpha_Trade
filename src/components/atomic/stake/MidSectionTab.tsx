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
      className={`focus:outline-none hover:text-blue-1000 relative mx-4 ${
        props.active ? props.activeString: props.notActiveString
      }`}
    >
      <div className="boldText xxl:text-base xl:text-base text-base">
      {props.text}
        </div>
      {props.from && props.to && <div className="flex xxl:sm xl:text-xs text-xs ">({props.from} <img src="/assets/Icons/see details arrow.svg" className="mx-2 " alt="img"></img> {props.to})</div>}
      {props.subText && <div className="flex xxl:sm xl:text-xs text-xs">({props.subText})</div>}
      {props.active && (
        <div className={`absolute border-b-2 w-8 ${props.activeBorder}`}></div>
      )}
    </button>
  );
}

export default MidSectionTab;
