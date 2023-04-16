import React from "react";
import FAQSection from "./FAQSection/FAQSection";
import Section1 from "./Section/Section1/Section1";
import Section2 from "./Section/Section2/Section2";
import Section3 from "./Section/Section3/Section3";
import Section4 from "./Section/Section4/Section4";

const sectionData = [
  {
    id: 1,
    title: "Enjoy on your TV.",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    image: "tv.png",
  },
  {
    id: 2,
    title: "Watch everywhere.",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    image: "device-pile.png",
  },
  {
    id: 3,
    title: "Create profiles for kids.",
    desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    image: "kid.png",
  },
  {
    id: 4,
    title: "Download your shows to watch offline.",
    desc: "Save your favorites easily and always have something to watch.",
    image: "poster.jpg",
  },
];

export default function Sections() {
  // const sections = sectionData.map(sec => <Section key={sec.id} {...sec} />);
  return (
    <React.Fragment>
      <Section1
        id={sectionData[0].id}
        title={sectionData[0].title}
        desc={sectionData[0].desc}
        image={sectionData[0].image}
      />
      <Section2
        id={sectionData[1].id}
        title={sectionData[1].title}
        desc={sectionData[1].desc}
        image={sectionData[1].image}
      />
      <Section3
        id={sectionData[2].id}
        title={sectionData[2].title}
        desc={sectionData[2].desc}
        image={sectionData[2].image}
      />
      <Section4
        id={sectionData[3].id}
        title={sectionData[3].title}
        desc={sectionData[3].desc}
        image={sectionData[3].image}
      />
      <FAQSection />
    </React.Fragment>
  );
}
