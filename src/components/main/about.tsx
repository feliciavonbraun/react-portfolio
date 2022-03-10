import { useMediaQuery } from "../mediaQuery";
import AboutCard from "./aboutCard";
import styled from "styled-components";
import aboutDetails from "../../content/aboutInfo";

function About() {
  let mobileView = useMediaQuery("(max-width: 950px)");

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
export default About;

const StyledAboutArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

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
