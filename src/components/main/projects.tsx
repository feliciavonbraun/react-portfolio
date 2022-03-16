import { useMediaQuery } from "../mediaQuery";
import projects from "../../content/allProjects";
import styled from "styled-components";
import cursorFokus from "../../assets/cursorFocus.svg";

function Projects() {
  let mobileView = useMediaQuery("(max-width: 700px)");

  return (
    <div>
      <SmallScreenTitel id="projects">Projects</SmallScreenTitel>
      <hr />

      <StyledProjectArea>
        {projects.map((project, index) => (
          <StyledProjectContainer key={index}>
            <div style={{ zIndex: -1, position: "relative" }}>
              <StyledComputerPicture
                // style={{ zIndex: -1 }}
                src={project.src}
                alt={project.alt}
              />
            </div>
            {mobileView ? (
              <StyledSmallScreenButtonDiv>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <SmallScreenButtons>{project.titel} </SmallScreenButtons>
                  </a>
                )}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <SmallScreenButtons>Repo</SmallScreenButtons>
                </a>
              </StyledSmallScreenButtonDiv>
            ) : (
              <DesktopHoverTitle>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <ProjectTitle>{project.titel}</ProjectTitle>
                  </a>
                )}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ProjectTitle>Repo</ProjectTitle>
                </a>
              </DesktopHoverTitle>
            )}
          </StyledProjectContainer>
        ))}
      </StyledProjectArea>
    </div>
  );
}
export default Projects;

const SmallScreenTitel = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

const StyledProjectArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 3rem;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    margin: 0;
  }
`;

const StyledComputerPicture = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  /* height: auto; */
  transition: 0.5s ease;
  backface-visibility: hidden;
  border-radius: 0.2rem;
  z-index: -1;

  @media screen and (max-width: 950px) {
    opacity: 1;
  }
`;

const DesktopHoverTitle = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  opacity: 0;
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledProjectContainer = styled.div`
  position: relative;
  width: 30%;
  padding: 1rem;

  :hover {
    ${StyledComputerPicture} {
      opacity: 0.3;
    }
    ${DesktopHoverTitle} {
      opacity: 1;
    }
  }

  @media screen and (max-width: 950px) {
    width: 50%;

    :hover {
      ${StyledComputerPicture} {
        opacity: 0.3;
      }
    }
  }

  @media screen and (max-width: 750px) {
    :hover {
      ${StyledComputerPicture} {
        opacity: 1;
      }
    }
  }
`;

const StyledSmallScreenButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.3rem;
  font-size: medium;
`;

const SmallScreenButtons = styled.p`
  background: var(--object-clr);
  color: var(--bubble-clr2);
  border-radius: 0.1rem;

  display: flex;
  justify-content: center;
  padding: 0.2rem 0;
  margin-top: -0.9rem;
  box-shadow: 0px 2px 7px black;

  :hover {
    transform: scale(1.06);
  }
`;

const ProjectTitle = styled.p`
  background: var(--object-clr);
  color: var(--text-clr);
  font-size: 16px;
  letter-spacing: 1.5px;
  padding: 16px 32px;
  border-radius: 0.1rem;

  :hover {
    text-decoration: none;
    transform: scale(1.06);
    cursor: url(${cursorFokus}) 18 18, auto;
  }

  @media screen and (max-width: 950px) {
    font-size: small;
  }
`;
