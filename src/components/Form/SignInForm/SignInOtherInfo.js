import React from "react";
import classes from "./SignInOtherInfo.module.css";

export default function SignInOtherInfo() {
  return (
    <div className={classes["form--sign-in__other"]}>
      <div className={classes["form--sign-in__other__sign-up"]}>
        New to Netflix?{" "}
        <a href="##" className={classes["form--sign-in__other__sign-up__link"]}>
          Sign up now.
        </a>
      </div>
      <p className={classes["form--sign-in__other__text"]}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a href="##" className={classes["form--sign-in__other__text__link"]}>
          Learn more
        </a>
      </p>
    </div>
  );
}
