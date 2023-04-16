import React from "react";
import classes from "./SectionImage.module.css";

export default function SectionImage(props) {
  return (
    <div
      className={`${classes["section__image__wrapper"]} ${
        props.className ? classes[props.className] : ""
      }`}
    >
      <img
        className={`${classes["section__image__wrapper__img"]}`}
        alt="tv"
        src={require(`../../assets/${props.image}`)}
      />
      {props.children}
    </div>
  );
}
