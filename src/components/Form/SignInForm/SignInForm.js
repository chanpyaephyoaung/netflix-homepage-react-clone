import React from "react";
import Button from "../../UI/Button/Button";
import EmailPhoneInput from "../Input/EmailPhoneInput";
import PasswordInput from "../Input/PasswordInput";
import classes from "./SignInForm.module.css";
import SignInOtherInfo from "./SignInOtherInfo";

export default function SignInForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={classes["form--sign-in__wrapper"]}>
      <h2 className={`heading--primary--lg ${classes["form--sign-in__title"]}`}>Sign In</h2>
      <form onSubmit={handleSubmit} className={classes["form--sign-in"]}>
        <EmailPhoneInput />
        <PasswordInput />

        <Button type="submit" className="btn--sign-in btn--primary">
          Sign In
        </Button>
        <div className={classes["form--sign-in__help"]}>
          <div className={classes["form--sign-in__help__controls"]}>
            <input id="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">
              <span className={classes.checkbox}></span>
              Remember Me
            </label>
          </div>
          <a className={classes["need-help__link"]} href="##">
            Need help?
          </a>
        </div>
      </form>
      <SignInOtherInfo />
    </div>
  );
}
