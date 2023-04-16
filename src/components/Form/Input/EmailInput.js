import React, { useState } from "react";
import ErrorText from "./ErrorText";
import Input from "./Input";

const EmailInput = React.forwardRef((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState({
    isValid: null,
    error: "",
    isErrorInitiated: false,
  });

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = e => {
    if (!e.target.value) setIsFocus(false);
    if (
      e.target.value.length >= 1 &&
      e.target.value.length <= 5 &&
      !isInputValid.isErrorInitiated
    ) {
      setIsInputValid(prevInputValid => ({
        ...prevInputValid,
        isValid: false,
        error: "Email is required!",
        isErrorInitiated: true,
      }));
    }

    if (e.target.value.length > 5 && !e.target.value.includes("@")) {
      setIsInputValid(prevInputValid => ({
        ...prevInputValid,
        isValid: false,
        error: "Please enter a valid email address.",
        isErrorInitiated: true,
      }));
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    if (e.target.value.length > 4 && e.target.value.includes("@"))
      setIsInputValid(prevInputValid => ({
        ...prevInputValid,
        isValid: true,
        error: "",
      }));
    if (isInputValid.isErrorInitiated) {
      if (!e.target.value || e.target.value.length <= 5) {
        setIsInputValid(prevInputValid => ({
          ...prevInputValid,
          isValid: false,
          error: "Email is required!",
        }));
      }
      if (e.target.value.length > 5 && !e.target.value.includes("@")) {
        setIsInputValid(prevInputValid => ({
          ...prevInputValid,
          isValid: false,
          error: "Please enter a valid email address.",
        }));
      }
    }
  };
  return (
    <Input
      ref={ref}
      className={props.className}
      darkInput={props.darkInput}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      focusState={isFocus}
      value={inputValue}
      id={props.id}
      type={props.type}
      label={props.label}
    >
      {isInputValid.isValid || (
        <ErrorText errSource={props.errSource}>{isInputValid.error}</ErrorText>
      )}
    </Input>
  );
});

export default EmailInput;
