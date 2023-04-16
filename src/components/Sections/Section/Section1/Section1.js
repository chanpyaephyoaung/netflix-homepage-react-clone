import React from "react";
import classes from "./Section1.module.css";
import SectionContainer from "../../../UI/Container/SectionContainer";
import SectionImage from "../../SectionImage";
import SectionText from "../../SectionText";

export default function Section1(props) {
  return (
    <SectionContainer>
      <SectionText id={props.id} title={props.title} desc={props.desc} />
      <SectionImage image={props.image}>
        <video className={`${classes["section__video--tv"]}`} autoPlay muted loop>
          <source src={require("../../../../assets/tv-video.m4v")} />
        </video>
      </SectionImage>
    </SectionContainer>
  );
}
