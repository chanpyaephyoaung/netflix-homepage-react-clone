import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const classNames = props.className
    ? props.className
        .split(" ")
        .map(cl => classes[cl])
        .join(" ")
    : "";

  return (
    <div
      className={`${classes["form__controls"]} ${
        props.darkInput ? classes["form__controls__sign-in"] : ""
      }  ${props.value ? classes.focus : ""}}`}
    >
      <div
        className={`${classes["form__controls__input__wrapper"]} ${
          props.darkInput ? classes["form__controls__input__wrapper--dark"] : ""
        }`}
      >
        <input
          ref={ref}
          className={`${classNames}`}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          value={props.value}
          id={props.id}
          type={props.type}
          autoComplete="off"
        />
        <label className={props.focusState ? classes.focus : ""} htmlFor={props.id}>
          {props.label}
        </label>
      </div>
      {props.children}
    </div>
  );
});

export default Input;
