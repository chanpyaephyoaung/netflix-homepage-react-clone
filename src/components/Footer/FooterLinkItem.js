import React from "react";
import classes from "./FooterLinkItem.module.css";

export default function FooterLinkItem(props) {
  return (
    <li className={`${classes["footer__item"]}`}>
      <a href="##" className={`paragraph paragraph--faded ${classes["footer__link"]}`}>
        {props.item}
      </a>
    </li>
  );
}
