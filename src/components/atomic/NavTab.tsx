import { NavLink } from "react-router-dom";
import React from "react";
interface IProps {
  path: string;
  active: boolean;
  text: string;
}

function NavTab(props: IProps) {
  return (
    <NavLink
      to={props.path}
      className={`${
        props.active ? "text-white" : "text-gray-500"
      } hover:text-white ml-6 lg:ml-12 text-xs xxl:text-lg rounded px-3 xxl:px-6 xxl:py-4 py-2 block `}
      // ${props.active&&'bg-customBlue-active'}
    >
      {props.text}
    </NavLink>
  );
}

export default NavTab;
