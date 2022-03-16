import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AboutDetail } from "../../content/aboutInfo";
import cursorFokus from "../../assets/cursorFocus.svg";

interface Props {
  aboutDetail: AboutDetail;
}

export default function AboutCard(props: Props) {
  const { alignment, samllImage, bigImage, text } = props.aboutDetail;

  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div style={alignment}>
      <StyledOneCard onClick={() => setIsCardOpen(!isCardOpen)}>
        <img
          src={samllImage}
          alt="Card Back"
          width="100%"
          height="100%"
          style={{ borderRadius: "0.2rem" }}
        />
        {isCardOpen && (
          <StyledImgTop>
            <img
              src={bigImage}
              alt="Card Front"
              width={isCardOpen ? "100%" : "0"}
              style={{ borderRadius: "0.2rem" }}
            />
            <StyledAboutText>{text}</StyledAboutText>
          </StyledImgTop>
        )}
      </StyledOneCard>
    </div>
  );
}

const Wiggle = keyframes`
  0% {
    transform: rotateZ(0);
  }
  14% {
    transform: rotateZ(1deg);
  } 
  15%{
    transform: rotateZ(0);
  }
  20% {
    transform: rotateZ(-1deg);
  }
  25% {
    transform: rotateZ(0deg);
  }
  30% {
    transform: rotateZ(1deg);
  }
  35% {
    transform: rotateZ(0);
  }
  40% {
    transform: rotateZ(-1deg);
  }
  50%, 100% {
    transform: rotateZ(0);
  }
`;

const StyledOneCard = styled.div`
  margin: 0 3rem;
  display: flex;
  padding: 1rem;
  width: 35rem;
  position: relative;
  flex-direction: column;

  > img {
    cursor: url(${cursorFokus}) 18 18, auto;
  }

  :hover {
    animation: ${Wiggle} 1s ease;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledImgTop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
`;

const StyledAboutText = styled.p`
  background: rgba(0, 0, 0, 0.468);
  color: var(--text-clr);
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.1rem;
`;

// @keyframes inAnimation {
//     0% {
//       opacity: 0;
//       max-height: 0px;
//     }
//     100% {
//       opacity: 1;
//       max-height: 600px;
//     }
//   }

//   @keyframes outAnimation {
//     0% {
//       opacity: 1;
//       max-height: 600px;
//     }
//     100% {
//       opacity: 0;
//       max-height: 0px;
//     }
//   }
