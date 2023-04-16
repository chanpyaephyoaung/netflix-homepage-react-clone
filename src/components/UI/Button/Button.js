import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  const classNames = props.className
    ? props.className
        .split(" ")
        .map(cl => classes[cl])
        .join(" ")
    : "";
  return (
    <button type={props.type} className={`${classes.btn} ${classNames}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
