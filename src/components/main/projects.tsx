import "../css/projects.css";
import { useMediaQuery } from "../mediaQuery";
import projects from "../content/allProjects";

function Projects() {
  let mobileView = useMediaQuery("(max-width: 700px)");

    return (
        <div>
            <h2 id="projects" className="flex center smallScreenTitel">Projects</h2>
            <hr />

            <div className="projectArea flex">
                {projects.map((project, index) =>
                    <div key={index} className="projectContainer">
                        <img className="computerPicture" src={project.src} alt={project.alt} />

                        {/* Titel buttons depending on screensize */}
                        {mobileView ?
                            <div className='smallScreenButtonDiv'>
                                {project.demoLink &&
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" >
                                        <p className="smallScreenButtons imgZoom">{project.titel} </p>
                                    </a>
                                }
                                <a href={project.repoLink} target="_blank" rel="noreferrer">
                                    <p className="smallScreenButtons imgZoom ">Repo</p>
                                </a>
                            </div>
                            :
                            <div className="hoverEffects">
                                {project.demoLink &&
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" >
                                        <p className="projectTitle imgZoom">{project.titel} </p>
                                    </a>
                                }
                                <a href={project.repoLink} target="_blank" rel="noreferrer">
                                    <p className="projectTitle imgZoom">Repo</p>
                                </a>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
};
export default Projects;