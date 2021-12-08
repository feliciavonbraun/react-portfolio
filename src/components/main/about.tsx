import malta from "../../assets/photos/malta.jpeg";
import maltaS from "../../assets/photos/maltaS.jpeg";
import traveling from "../../assets/photos/traveling.jpeg";
import travelingS from "../../assets/photos/travelingS.jpeg";
import nature from "../../assets/photos/nature.jpg";
import natureS from "../../assets/photos/natureS.jpg";
import gadget from "../../assets/photos/gadgets.jpeg";
import gadgetS from "../../assets/photos/gadgetsS.jpeg";
import { useMediaQuery } from "../mediaQuery";
import { CSSProperties } from "react";
import AboutCard from "./aboutCard";
import styled from "styled-components";

export interface AboutDetail {
  bigImage: string;
  samllImage: string;
  text: string;
  alignment?: CSSProperties;
}

export default function About2() {
  let mobileView = useMediaQuery("(max-width: 950px)");

  const aboutDetails: AboutDetail[] = [
    {
      bigImage: gadget,
      samllImage: gadgetS,
      text: "I am an aspiring frontend developer studying at Medieinstitutet in Gothenburg and I will graduate in may 2022. Ever since I can remember all kinds of digital gadgets have been an interest of mine, so if felt natural studying something that involved computers. And I’ve found my place.",
      alignment: FlexEnd,
    },
    {
      bigImage: malta,
      samllImage: maltaS,
      text: "I’ve been living and working in Malta for 1.5 years which was a great experience. I learned so much and made friends for life.",
    },
    {
      bigImage: traveling,
      samllImage: travelingS,
      text: "Sounds like a cliche to say I love traveling but so be it. Together with my backpack and friends I have been traveling around the world. I love exploring every different area with people and nature. Everything from jumping out of a plane to diving down with the fishes.",
      alignment: FlexEnd,
    },
    {
      bigImage: nature,
      samllImage: natureS,
      text: "When lack of inspiration I always turn to nature with my family and friends. There is no such thing as watching every element and all the lives of nature.",
    },
  ];

  return (
    <StyledAboutArea id="about">
      <StyledAboutTitle>About</StyledAboutTitle>
      {mobileView && <hr />}

      <div>
        {aboutDetails.map((aboutDetail, index) => (
          <AboutCard key={index} aboutDetail={aboutDetail} />
        ))}
      </div>
    </StyledAboutArea>
  );
}

const StyledAboutArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexEnd: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
};

const StyledAboutTitle = styled.h2`
  position: relative;
  font-size: 5rem;
  padding-left: 6rem;
  top: 3.1rem;
  margin: 0;

  @media screen and (max-width: 950px) {
    position: unset;
    display: flex;
    justify-content: center;
    padding: 0;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;
