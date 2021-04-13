import htmlLogo from '../assets/logos/html.png'
import cssLogo from '../assets/logos/css.png'
import jsLogo from '../assets/logos/js.png'
import tsLogo from '../assets/logos/ts-svart.png'
import reactLogo from '../assets/logos/react.png'
import '../css/skills.css'

interface ImgDetail {
    img: string;
    width: string;
    alt: string;
}

function Skills() {

    const imgDetails: ImgDetail[] = [
        {
            img: htmlLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '100%',
            alt: 'HTML'
        }, {
            img: cssLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '90%',
            alt: 'CSS'
        }, {
            img: jsLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '100%',
            alt: 'JavaScript'
        }, {
            img: tsLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '80%',
            alt: 'TypeScript'
        }, {
            img: reactLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '95%',
            alt: 'react'
        },
    ]

    return (
        <div>
            <div>
                <h2 className="smallSkillsHeader center">Skills</h2>
            </div>
            <div id="skills" className="skillsArea flex">

                <div className="bigSkillsHeader flex column">
                    <h2 className="skillsLetter">S</h2>
                    <h2 className="skillsLetter">K</h2>
                    <h2 className="skillsLetter">I</h2>
                    <h2 className="skillsLetter">L</h2>
                    <h2 className="skillsLetter">L</h2>
                    <h2 className="skillsLetter">S</h2>
                </div>

                {imgDetails.map((imgDetail, index) =>
                    <div key={index} className="skill">
                        <img src={imgDetail.img} width={imgDetail.width} alt={imgDetail.alt} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Skills;