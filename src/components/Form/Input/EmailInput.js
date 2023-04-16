import React from "react";
import ErrorText from "./ErrorText";
import Input from "./Input";

const EmailInput = React.forwardRef((props, ref) => {
  return (
    <Input
      ref={ref}
      className={props.className}
      darkInput={props.darkInput}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      focusState={props.focusState}
      value={props.value}
      id={props.id}
      type={props.type}
      label={props.label}
    >
      {props.isInvalid && <ErrorText errSource={props.errSource}>{props.errorMsg}</ErrorText>}
    </Input>
  );
});

export default EmailInput;
