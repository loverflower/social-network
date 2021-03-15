import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path} className="item" activeClassName={s.superactive}>
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
