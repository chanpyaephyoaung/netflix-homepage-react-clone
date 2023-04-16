import React from "react";
import Container from "./Container";
import classes from "./SectionContainer.module.css";

export default function SectionContainer(props) {
  return (
    <Container className="container--bg">
      <section className={classes.section}>{props.children}</section>
    </Container>
  );
}
