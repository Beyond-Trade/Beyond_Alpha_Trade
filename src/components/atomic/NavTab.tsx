import React from "react";
import { NavLink } from "react-router-dom";
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
      } hover:text-white ml-12 text-xs`}
    >
      {props.text}
    </NavLink>
  );
}

export default NavTab;
