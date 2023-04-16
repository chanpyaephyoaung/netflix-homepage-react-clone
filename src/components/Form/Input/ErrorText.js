import React from "react";
import classes from "./ErrorText.module.css";

export default function ErrorText(props) {
  return (
    <p
      className={`paragraph paragraph--error ${
        props.errSource === "sign-in-form"
          ? classes["error__text--sign-in"]
          : classes["error__text"]
      }`}
    >
      {props.children}
    </p>
  );
}
