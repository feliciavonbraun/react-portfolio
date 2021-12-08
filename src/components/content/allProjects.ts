import bjorkImg from "../../assets/projects/bjork.png";
import ballaUrImg from "../../assets/projects/ballaur.png";
import rapiDapiImg from "../../assets/projects/rapidapi.png";
import quizappImg from "../../assets/projects/quizapp.png";
import calendarImg from "../../assets/projects/calendar.png";
import flightgameImg from "../../assets/projects/flightgame.png";
import rainbowLandImg from "../../assets/projects/rainbowLand.png";
import chatALotImg from "../../assets/projects/chatAlot.png";
import fashionStoreImg from "../../assets/projects/fashionStore.png";

interface Project {
  titel?: string;
  src: string;
  alt: string;
  demoLink?: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    // titel: 'Fashion Store',
    src: fashionStoreImg,
    alt: "Fashion Store",
    // demoLink: '',
    repoLink: "https://github.com/feliciavonbraun/fashion-store",
  },
  {
    // titel: 'ChatALot',
    src: chatALotImg,
    alt: "ChatALot",
    // demoLink: '',
    repoLink: "https://github.com/feliciavonbraun/chat-room",
  },
  {
    // titel: 'Rainbow Land',
    src: rainbowLandImg,
    alt: "Rainbow Land",
    // demoLink: '',
    repoLink: "https://github.com/feliciavonbraun/rainbow-land",
  },
  {
    titel: "Björk",
    src: bjorkImg,
    alt: "Björk",
    demoLink: "https://bjorkinterior.netlify.app/",
    repoLink: "https://github.com/feliciavonbraun/bjork",
  },
  {
    titel: "Balla:Ur",
    src: ballaUrImg,
    alt: "Balla:Ur",
    demoLink: "https://balla-ur-online.netlify.app/",
    repoLink: "https://github.com/feliciavonbraun/Ball-game",
  },
  {
    titel: "RapiDapi",
    src: rapiDapiImg,
    alt: "RapiDapi",
    demoLink: "https://rapidapiapp.netlify.app/",
    repoLink: "https://github.com/feliciavonbraun/rapidapi-app",
  },
  {
    titel: "Higher or Lower",
    src: quizappImg,
    alt: "Higher or Lower",
    demoLink: "https://higerorlower.netlify.app/",
    repoLink: "https://github.com/feliciavonbraun/quiz-app",
  },
  {
    titel: "Calendar",
    src: calendarImg,
    alt: "Calendar",
    demoLink: "https://feliciavonbraun.github.io/calendar/",
    repoLink: "https://github.com/feliciavonbraun/calendar",
  },
  {
    titel: "Text Game",
    src: flightgameImg,
    alt: "Text Based Game",
    demoLink: "https://feliciavonbraun.github.io/javascript-game/",
    repoLink: "https://github.com/feliciavonbraun/javascript-game",
  },
];

export default projects;
