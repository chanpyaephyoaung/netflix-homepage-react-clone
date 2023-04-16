import React, { useContext } from "react";
import classes from "./SignInPage.module.css";
import logo from "../../../assets/logo.svg";
import SignInForm from "../../Form/SignInForm/SignInForm";
import Footer from "../../Footer/Footer";
import SignInContext from "../../../store/sign-in-context";

const footerLinksList = [
  "FAQ",
  "Help Center",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
];

export default function SignInPage() {
  const authCtx = useContext(SignInContext);
  return (
    <div className={classes["page--sign-in"]}>
      <img onClick={authCtx.onSignOut} alt="logo" className={classes.logo} src={logo} />
      <SignInForm />
      <div className={`${classes["footer__divide-line"]}`}></div>
      <Footer className="container--footer" hasLocationText={false} list={footerLinksList} />
    </div>
  );
}
