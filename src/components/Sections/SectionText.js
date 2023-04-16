import React from "react";
import classes from "./SectionText.module.css";

export default function SectionText(props) {
  const titleClassNames = props.titleClassNames
    ? props.titleClassNames
        .split(" ")
        .map(cl => classes[cl])
        .join(" ")
    : "";
  return (
    <div
      className={`${classes["section__text"]} ${
        props.id % 2 === 0 && classes["section__text--order-last"]
      }`}
    >
      <h2
        className={`heading--primary ${classes["section__text__title"]} ${titleClassNames || ""}`}
      >
        {props.title}
      </h2>
      <h3 className={`heading--secondary ${classes["section__text__desc"]}`}>{props.desc}</h3>
    </div>
  );
}
