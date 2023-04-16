import React from "react";
import EmailForm from "../../Form/EmailForm/EmailForm";
import Container from "../../UI/Container/Container";
import secTextClasses from "../SectionText.module.css";
import FAQList from "./FAQList";
import classes from "./FAQSection.module.css";

export default function FAQSection() {
  return (
    <Container className="container--bg">
      <div className={`${classes["section--faq"]}`}>
        <h2
          className={`heading--primary ${secTextClasses["section__text__title"]} ${secTextClasses["center"]}`}
        >
          Frequently Asked Questions
        </h2>
        <FAQList />
        <EmailForm id="email-2" type="email" label="Email Address" />
      </div>
    </Container>
  );
}
