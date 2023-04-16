import React from "react";
import classes from "./FAQItem.module.css";

export default function FAQItem(props) {
  const separator = [
    <React.Fragment key={Math.random()}>
      <br />
      <br />
    </React.Fragment>,
  ];
  // Separating paragraphs with two <br>s
  const separatePara = (strArr, separator) => {
    return strArr.reduce((acc, cur, i) => {
      let arr = [acc];
      if (i > 1) arr = [...acc];
      return arr.concat(separator).concat([cur]);
    });
  };
  const answer = separatePara(props.answer, separator);

  return (
    <li className={`${classes["section--faq__item"]}`}>
      <button onClick={props.onShow} className={`${classes["section--faq__question"]}`}>
        <h3 className={`heading--secondary ${classes["section--faq__item__question"]}`}>
          {props.question}
        </h3>
        <span
          className={`${classes["section--faq__item__icon"]} ${
            props.isActive ? classes["rotate"] : ""
          }`}
        >
          &#43;
        </span>
      </button>
      <div className={`${classes["section--faq__answer"]} ${props.isActive ? classes.open : ""}`}>
        <p className={`heading--secondary ${classes["section--faq__answer__text"]}`}>{answer}</p>
      </div>
    </li>
  );
}
