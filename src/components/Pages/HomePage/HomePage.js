import React from "react";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Sections from "../../Sections/Sections";

const footerDataHomePage = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Coookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <Sections />
      <Footer hasLocationText={true} list={footerDataHomePage} />
    </React.Fragment>
  );
}
