import React, { useRef } from "react";

import classes from "./EmailForm.module.css";
import Button from "../../UI/Button/Button";
import EmailInput from "../Input/EmailInput";
import useInput from "../../../hooks/use-input";

export default function EmailForm(props) {
  const inputRef = useRef(null);
  let error = "";

  const validateInput = value => {
    if (value.length >= 1 && value.length <= 5) {
      error = "Email is required!";
      return false;
    }
    if (value.length > 5 && !value.includes("@")) {
      error = "Please enter a valid email address.";
      return false;
    }
    if (!value || value.length <= 5) {
      error = "Email is required!";
      return false;
    }
    return true;
  };

  const {
    enteredInput: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueIsInvalid: enteredEmailIsInvalid,
    inputIsFocus: isFocus,
    handleInputChange: emailChangeHandler,
    handleInputBlur: emailBlurHandler,
    handleInputFocus: emailFocusHandler,
    reset: resetEmailInputForm,
  } = useInput(validateInput);

  const handleSubmit = e => {
    e.preventDefault();
    if (!enteredEmailIsValid) return;
    inputRef.current.blur();
    resetEmailInputForm();
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
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          onFocus={emailFocusHandler}
          focusState={isFocus}
          isInvalid={enteredEmailIsInvalid}
          errorMsg={error}
        />
        <Button onClick={handleBtnClick} className={`btn--primary btn--lg`}>
          Get Started &#10095;
        </Button>
      </div>
    </form>
  );
}
