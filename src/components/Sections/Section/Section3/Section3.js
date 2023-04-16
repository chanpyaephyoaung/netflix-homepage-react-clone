import React from "react";
import SectionContainer from "../../../UI/Container/SectionContainer";
import SectionImage from "../../SectionImage";
import SectionText from "../../SectionText";

export default function Section3(props) {
  return (
    <SectionContainer>
      <SectionText id={props.id} title={props.title} desc={props.desc} />
      <SectionImage image={props.image}></SectionImage>
    </SectionContainer>
  );
}
