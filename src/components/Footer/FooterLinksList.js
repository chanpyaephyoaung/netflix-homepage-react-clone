import React from "react";
import FooterLinkItem from "./FooterLinkItem";
import classes from "./FooterLinksList.module.css";

export default function FooterLinksList(props) {
  const items = props.list.map(item => <FooterLinkItem key={item} item={item} />);
  return <ul className={`${classes["footer__link-list"]}`}>{items}</ul>;
}
