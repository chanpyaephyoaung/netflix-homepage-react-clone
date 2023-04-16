import React from "react";
import SectionContainer from "../../../UI/Container/SectionContainer";
import SectionImage from "../../SectionImage";
import SectionText from "../../SectionText";
import classes from "./Section2.module.css";

export default function Section2(props) {
  return (
    <SectionContainer>
      <SectionText id={props.id} title={props.title} desc={props.desc} />
      <SectionImage image={props.image}>
        <video className={`${classes["section__video--tv"]}`} autoPlay muted loop>
          <source src={require("../../../../assets/tv-video-2.m4v")} />
        </video>
      </SectionImage>
    </SectionContainer>
  );
}
