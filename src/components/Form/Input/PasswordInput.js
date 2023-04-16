import React, { useState, useRef } from "react";
import classes from "./PasswordInput.module.css";
import Input from "./Input";
import ErrorText from "./ErrorText";

export default function PasswordInput() {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordShownState, setPasswordShown] = useState({
    passwordShown: false,
    finalPasswordShown: false,
  });
  const [isInputValid, setIsInputValid] = useState({
    isInvalid: false,
    error: "",
    isErrorInitiated: false,
  });
  const [isFocus, setIsFocus] = useState(false);
  const [btnHidden, setBtnHidden] = useState(false);

  const inputRef = useRef();

  const handleChange = e => {
    setPasswordValue(e.target.value);

    // Validate password in input change
    if (e.target.value.length >= 4 && e.target.value.length <= 60) {
      setIsInputValid({
        isInvalid: false,
        error: "",
        isErrorInitiated: true,
      });
    }
    if (
      isInputValid.isErrorInitiated &&
      (e.target.value.length < 4 || e.target.value.length > 60)
    ) {
      setIsInputValid({
        isInvalid: true,
        error: "Your password must contain between 4 and 60 characters.",
        isErrorInitiated: true,
      });
    }
  };

  const handleFocus = () => {
    // Regain the password shown state when into focus again
    if (passwordShownState.finalPasswordShown)
      setPasswordShown(prevPassState => ({ ...prevPassState, passwordShown: true }));
    setIsFocus(true);
    setBtnHidden(false);
  };

  const handleBlur = e => {
    if (!e.target.value) {
      setIsFocus(false);
      setIsInputValid({
        isInvalid: true,
        error: "Your password must contain between 4 and 60 characters.",
        isErrorInitiated: true,
      });
    }

    // Validate password in input blur
    if (e.target.value.length < 4 || e.target.value.length > 60) {
      setIsInputValid({
        isInvalid: true,
        error: "Your password must contain between 4 and 60 characters.",
        isErrorInitiated: true,
      });
    }

    // Maintain the password shown state when the input is blurred out
    setPasswordShown(prevPassState => ({
      ...prevPassState,
      finalPasswordShown: prevPassState.passwordShown,
    }));
    if (e.relatedTarget && e.relatedTarget.id === "passwordFieldBtn") {
      inputRef.current.focus();
      return;
    }
    setPasswordShown(prevPassState => ({ ...prevPassState, passwordShown: false }));
    setBtnHidden(true);
  };

  const handleClick = () => {
    inputRef.current.focus();
    setPasswordShown(prevPassState => ({
      ...prevPassState,
      passwordShown: !prevPassState.passwordShown,
    }));
  };

  return (
    <div className={classes["form__controls--password"]}>
      <Input
        ref={inputRef}
        onValue={passwordValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        focusState={isFocus}
        value={passwordValue}
        className={`form--sign-in__input ${isInputValid.error ? "error-border" : ""}`}
        id={"signInPassword"}
        type={passwordShownState.passwordShown ? "text" : "password"}
        label={"Password"}
        darkInput={true}
      >
        {isFocus && (
          <button
            className={btnHidden ? classes.hidden : ""}
            id="passwordFieldBtn"
            onClick={handleClick}
            type="button"
          >
            {passwordShownState.passwordShown ? "Hide" : "Show"}
          </button>
        )}
      </Input>
      {isInputValid.isInvalid && (
        <ErrorText errSource="sign-in-form">{isInputValid.error}</ErrorText>
      )}
    </div>
  );
}
