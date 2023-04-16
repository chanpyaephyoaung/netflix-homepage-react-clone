import React from "react";
import classes from "./Container.module.css";

export default function Container(props) {
  const classNames = props.className
    ? props.className
        .split(" ")
        .map(cl => classes[cl])
        .join(" ")
    : "";
  return <div className={`${classes.container} ${classNames}`}>{props.children}</div>;
}
