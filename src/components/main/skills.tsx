import { useMediaQuery } from "../mediaQuery";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import htmlLogo from "../../assets/logos/html.png";
import cssLogo from "../../assets/logos/css.png";
import jsLogo from "../../assets/logos/js.png";
import tsLogo from "../../assets/logos/ts-svart.png";
import reactLogo from "../../assets/logos/react.png";
import mongoLogo from "../../assets/logos/mongodb3.png";
// import figmaLogo from "../../assets/logos/figma.png";
// import styledComponentsLogo from "../../assets/logos/styled-components.png";

interface ImgDetail {
  img: string;
  width: string;
  alt: string;
}

function Skills() {
  const mobileView = useMediaQuery("(max-width: 985px)");
  // const smallerView = useMediaQuery('(max-width: 550px)');

  const imgDetails: ImgDetail[] = [
    {
      img: htmlLogo,
      // denna ska ju va i % vart ska vi sätta det??
      width: "100%",
      alt: "HTML",
    },
    {
      img: cssLogo,
      // denna ska ju va i % vart ska vi sätta det??
      width: "85%",
      alt: "CSS",
    },
    {
      img: jsLogo,
      // denna ska ju va i % vart ska vi sätta det??
      width: "100%",
      alt: "JavaScript",
    },
    {
      img: tsLogo,
      // denna ska ju va i % vart ska vi sätta det??
      width: "80%",
      alt: "TypeScript",
    },
    {
      img: reactLogo,
      // denna ska ju va i % vart ska vi sätta det??
      width: "95%",
      alt: "React",
    },
    {
      img: mongoLogo,
      // denna ska ju va i % vart ska vi sätta det??
      width: "45%",
      alt: "MongoDB",
    },
    // {
    //   img: figmaLogo,
    //   // denna ska ju va i % vart ska vi sätta det??
    //   width: "90%",
    //   alt: "Figma",
    // },
    // {
    //   img: styledComponentsLogo,
    //   // denna ska ju va i % vart ska vi sätta det??
    //   width: "80%",
    //   alt: "styled-components",
    // },
  ];

  return (
    <Box>
      <Box>
        <MobileTitle>Skills</MobileTitle>
        {mobileView && <hr />}
      </Box>

      <SkillsArea id="skills">
        <DesktopTitle>
          <TitleLetter>S</TitleLetter>
          <TitleLetter>K</TitleLetter>
          <TitleLetter>I</TitleLetter>
          <TitleLetter>L</TitleLetter>
          <TitleLetter>L</TitleLetter>
          <TitleLetter>S</TitleLetter>
        </DesktopTitle>

        {/* <ImageGrid> */}
        {imgDetails.map((imgDetail, index) => (
          <ImageBox key={index}>
            <img
              src={imgDetail.img}
              width={imgDetail.width}
              alt={imgDetail.alt}
            />
          </ImageBox>
        ))}
        {/* </ImageGrid> */}
      </SkillsArea>
    </Box>
  );
}
export default Skills;

const MobileTitle = styled.h2`
  display: none;

  @media (max-width: 985px) {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const SkillsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem 3rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 985px) {
    padding: 1rem;
  }
`;

const TitleLetter = styled.h2`
  margin: 0;
  line-height: 1;
`;

const DesktopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 985px) {
    display: none;
  }
`;

// const ImageGrid = styled.div`
/* display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(8, 7rem);
  grid-template-rows: auto auto; */
// `;

const ImageBox = styled.div`
  background: var(--object-clr);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 7rem;
  height: 7rem;

  @media (max-width: 985px) {
    width: 15%;
    margin: 0.1rem;
    padding: 0.5rem;
  }

  @media (max-width: 550px) {
    height: 3rem;
  }
`;
