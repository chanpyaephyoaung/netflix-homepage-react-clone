import React from "react";
import classes from "./CountryItem.module.css";

export default function CountryItem(props) {
  return (
    <li onClick={props.onClick} className={classes["country-list__item"]}>
      <a className={classes["country-list__link"]} href="##">
        {`${props.countryName} +${props.phoneCode}`}
      </a>
    </li>
  );
}
