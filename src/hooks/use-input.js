import { useState } from "react";

const useInput = validateValue => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [inputIsFocus, setInputIsFocus] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  const valueIsValid = validateValue(enteredInput);
  const valueIsInvalid = !valueIsValid && inputIsTouched;

  const handleInputChange = e => {
    setEnteredInput(e.target.value);
    setHasTyped(true);
  };

  const handleInputBlur = e => {
    if (hasTyped) setInputIsTouched(true);
    if (!e.target.value) setInputIsFocus(false);
  };

  const handleInputFocus = () => {
    setInputIsFocus(true);
  };

  const reset = () => {
    setEnteredInput("");
    setInputIsTouched(false);
    setInputIsFocus(false);
    setHasTyped(false);
  };

  return {
    enteredInput,
    valueIsValid,
    valueIsInvalid,
    inputIsFocus,
    inputIsTouched,
    handleInputChange,
    handleInputBlur,
    handleInputFocus,
    reset,
  };
};

export default useInput;
