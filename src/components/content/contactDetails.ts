import CVLink from "../../assets/feliciavonbraunCV.pdf";
import cvImg from "../../assets/logos/cvicon.png";
import githubLogo from "../../assets/logos/github.png";
import linkedinLogo from "../../assets/logos/linkedin.png";
import maillogo from "../../assets/logos/maillogo.png";

interface Circle {
  class: string;
  href?: any;
  img?: string;
  alt?: string;
  height?: string;
  header?: string;
}

const circles: Circle[] = [
  {
    class: "circle1 flex center",
    href: CVLink,
    img: cvImg,
    alt: "CV",
    height: "2.8rem",
  },
  {
    class: "circle2 flex center",
  },
  {
    class: "circle3 flex center",
    href: "https://github.com/feliciavonbraun",
    img: githubLogo,
    alt: "Github",
    height: "3rem",
  },
  {
    class: "circle4 flex center",
    header: "Contact",
  },
  {
    class: "circle5 flex center",
    href: "https://www.linkedin.com/in/feliciavonbraun/",
    img: linkedinLogo,
    alt: "LinkedIn",
    height: "3rem",
  },
  {
    class: "circle6 flex center",
    href: "mailto:feliciavonbraun@hotmail.com?subject=Front End Developer",
    img: maillogo,
    alt: "E-mail me",
    height: "3.5rem",
  },
];

export default circles;
