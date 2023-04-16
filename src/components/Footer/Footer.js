import React from "react";
import Container from "../UI/Container/Container";
import classes from "./Footer.module.css";
import FooterLinksList from "./FooterLinksList";

export default function Footer(props) {
  return (
    <Container className={`container--bg borderless ${props.className}`}>
      <footer className={classes.footer}>
        <p className="paragraph--lg paragraph--faded">Questions? Contact us.</p>
        <FooterLinksList list={props.list} />
        {props.hasLocationText && (
          <p className={`paragraph paragraph--faded ${classes["footer__link--location"]}`}>
            Netflix Myanmar (Burma)
          </p>
        )}
      </footer>
    </Container>
  );
}
