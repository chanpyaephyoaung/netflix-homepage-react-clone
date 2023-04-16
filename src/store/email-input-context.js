import React, { useReducer } from "react";

const defaultEmailState = {
  isFocus: false,
  inputValue: "",
  isInputValid: {
    isValid: null,
    error: "",
    isErrorInitiated: false,
  },
};

const EmailInputContext = React.createContext({
  emailState: defaultEmailState,
  handleChange: e => {},
  handleFocus: () => {},
  handleBlur: () => {},
});

const emailReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_BLUR":
      console.log(state.isInputValid.isErrorInitiated, "hehe");
      if (!state.inputValue) {
        return {
          ...state,
          isFocus: false,
        };
      }
      if (
        state.inputValue.length >= 1 &&
        state.inputValue.length <= 5 &&
        !state.isInputValid.isErrorInitiated
      ) {
        return {
          ...state,
          isFocus: true,
          isInputValid: {
            isValid: false,
            error: "Email is required!",
            isErrorInitiated: true,
          },
        };
      }

      if (state.inputValue.length > 5 && !state.inputValue.includes("@")) {
        return {
          ...state,
          isFocus: true,
          isInputValid: {
            isValid: false,
            error: "Please enter a valid email address.",
            isErrorInitiated: true,
          },
        };
      }
      return {
        ...state,
        isFocus: true,
      };
    case "INPUT_CHANGE":
      const inputVal = action.value;
      console.log(inputVal);
      if (inputVal.length > 4 && inputVal.includes("@"))
        return {
          isFocus: true,
          inputValue: inputVal,
          isInputValid: {
            ...state.isInputValid,
            isValid: true,
            error: "",
          },
        };
      if (state.isInputValid.isErrorInitiated) {
        if (!inputVal || inputVal.length <= 5) {
          return {
            isFocus: true,
            inputValue: inputVal,
            isInputValid: {
              ...state.isInputValid,
              isValid: false,
              error: "Email is required!",
            },
          };
        }
        if (inputVal.length > 5 && !inputVal.includes("@")) {
          return {
            isFocus: true,
            inputValue: inputVal,
            isInputValid: {
              ...state.isInputValid,
              isValid: false,
              error: "Please enter a valid email address.",
            },
          };
        }
      }
      return {
        isFocus: true,
        inputValue: inputVal,
        isInputValid: {
          ...state.isInputValid,
          isValid: false,
          error: "",
        },
      };
    case "INPUT_FOCUS":
      console.log("Focus!");
      return {
        ...state,
        isFocus: true,
      };
    default:
      return state;
  }
};

export function EmailInputContextProvider(props) {
  const [emailState, dispatchEmail] = useReducer(emailReducer, defaultEmailState);

  const handleChange = val => {
    dispatchEmail({ type: "INPUT_CHANGE", value: val });
  };

  const handleFocus = () => {
    dispatchEmail({ type: "INPUT_FOCUS" });
  };

  const handleBlur = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  return (
    <EmailInputContext.Provider
      value={{
        emailState: emailState,
        handleChange: handleChange,
        handleFocus: handleFocus,
        handleBlur: handleBlur,
      }}
    >
      {props.children}
    </EmailInputContext.Provider>
  );
}

export default EmailInputContext;
