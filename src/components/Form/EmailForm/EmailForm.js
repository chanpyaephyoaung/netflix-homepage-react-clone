import React, { useRef } from "react";

import classes from "./EmailForm.module.css";
import Button from "../../UI/Button/Button";
import EmailInput from "../Input/EmailInput";

export default function EmailForm(props) {
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    console.log("Form Submitted!");
  };

  const handleBtnClick = () => {
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={`${classes["form--email"]}`}>
      <h3 className={`heading--secondary ${classes["form--email__title"]}`}>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={classes["form--email__controls"]}>
        <EmailInput
          errSource="email-form"
          darkInput={false}
          ref={inputRef}
          id={props.id}
          type={props.type}
          label={props.label}
        />
        <Button onClick={handleBtnClick} className={`btn--primary btn--lg`}>
          Get Started &#10095;
        </Button>
      </div>
    </form>
  );
}
