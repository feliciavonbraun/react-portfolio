import bjorkImg from '../assets/projects/bjork.png'
import ballaUrImg from '../assets/projects/ballaur.png'
import rapiDapiImg from '../assets/projects/rapidapi.png'
import quizappImg from '../assets/projects/quizapp.png'
import calendarImg from '../assets/projects/calendar.png'
import flightgameImg from '../assets/projects/flightgame.png'
import '../css/projects.css'

interface Project {
    titel: string;
    src: string;
    alt: string;
    href: string;
}

function Projects() {
    const projects: Project[] = [
        {
            titel: 'Björk',
            src: bjorkImg,
            alt: 'Balla:Ur',
            href: 'https://bjorkinterior.netlify.app/'
        }, {
            titel: 'Balla:Ur',
            src: ballaUrImg,
            alt: 'Björk',
            href: 'https://balla-ur-online.netlify.app/'
        }, {
            titel: 'RapiDapi',
            src: rapiDapiImg,
            alt: 'RapiDapi',
            href: 'https://rapidapiapp.netlify.app/'
        }, {
            titel: 'Higher or Lower',
            src: quizappImg,
            alt: 'Higher or Lower',
            href: 'https://higerorlower.netlify.app/'
        }, {
            titel: 'Calendar',
            src: calendarImg,
            alt: 'Calendar',
            href: 'https://feliciavonbraun.github.io/calendar/'
        }, {
            titel: 'Text Based Game',
            src: flightgameImg,
            alt: 'Text Based Game',
            href: 'https://feliciavonbraun.github.io/javascript-game/'
        },
    ];

    return (
        <div>
            <h2 id="projects" className="flex center">Projects</h2>

            <div className="projectArea flex">
                {projects.map((project, index) =>
                    <div key={index} className="projectContainer">
                        <img className="computerPicture" src={project.src} alt={project.alt} />
                        <div className="hoverEffects">
                            <a href={project.href} target="_blank" rel="noreferrer"><p className="projectTitle">{project.titel}</p></a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Projects;