import React from "react";
import classes from "./Section4.module.css";
import SectionContainer from "../../../UI/Container/SectionContainer";
import SectionImage from "../../SectionImage";
import SectionText from "../../SectionText";

export default function Section4(props) {
  return (
    <SectionContainer>
      <SectionText id={props.id} title={props.title} desc={props.desc} />
      <SectionImage className="section__image__wrapper--2" image={props.image}>
        <div className={`${classes["section__poster-box"]}`}>
          <img
            className={`${classes["section__poster-small"]}`}
            alt="small movie poster"
            src={require("../../../../assets/poster-boxshot.png")}
          />
          <div className={`${classes["section__poster-small__text"]}`}>
            <p className="paragraph paragraph--bold">Stranger Things</p>
            <p className="paragraph paragraph--sm paragraph--blue">Downloading...</p>
          </div>
          <img
            className={`${classes["section__download-icon"]}`}
            alt="download icon"
            src={require("../../../../assets/download-icon.gif")}
          />
        </div>
      </SectionImage>
    </SectionContainer>
  );
}
