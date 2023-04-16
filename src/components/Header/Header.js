import React, { useContext } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import Button from "../UI/Button/Button";
import SignInContext from "../../store/sign-in-context";

export default function Header() {
  const authCtx = useContext(SignInContext);
  return (
    <header className={classes.header}>
      <img alt="logo" className={classes.logo} src={logo} />
      <Button onClick={authCtx.onSignIn} className="btn--primary btn--small">
        Sign In
      </Button>
    </header>
  );
}
