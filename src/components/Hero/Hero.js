import React from "react";
import classes from "./Hero.module.css";
import Header from "../Header/Header";
import Container from "../UI/Container/Container";
import EmailForm from "../Form/EmailForm/EmailForm";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Header />
      <Container>
        <div className={classes["hero__text"]}>
          <h2 className={`heading--primary ${classes["hero__text__title"]}`}>
            Unlimited movies, TV shows, and more.
          </h2>
          <h3 className={`heading--secondary ${classes["hero__text__desc"]}`}>
            Watch anywhere. Cancel anytime.
          </h3>
          <EmailForm id="email-1" type="email" label="Email Address" />
        </div>
      </Container>
      <div className={`${classes["hero__dark-gradient"]}`}></div>
    </div>
  );
}
