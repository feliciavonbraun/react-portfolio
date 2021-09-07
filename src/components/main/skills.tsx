import htmlLogo from '../../assets/logos/html.png';
import cssLogo from '../../assets/logos/css.png';
import jsLogo from '../../assets/logos/js.png';
import tsLogo from '../../assets/logos/ts-svart.png';
import reactLogo from '../../assets/logos/react.png';
import mongoLogo from '../../assets/logos/mongodb3.png';
import '../css/skills.css';
// import { CSSProperties } from 'react'
import { useMediaQuery } from '../mediaQuery';

interface ImgDetail {
    img: string;
    width: string;
    alt: string;
}

function Skills() {

    let mobileView = useMediaQuery('(max-width: 985px)');

    const imgDetails: ImgDetail[] = [
        {
            img: htmlLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '100%',
            alt: 'HTML'
        }, {
            img: cssLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '85%',
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
            alt: 'React'
        }, {
            img: mongoLogo,
            // denna ska ju va i % vart ska vi sätta det??
            width: '45%',
            alt: 'MongoDB'
        },
    ]

    return (
        <div>
            <div>
                <h2 className="smallSkillsHeader center">Skills</h2>
                {mobileView && <hr/> }
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

// fixa conditional rendering på vilken heder som ska visas,
// ta in mediaquery componenten från chatalot

// const skillsArea: CSSProperties = {
//     padding: '1rem 3rem',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     flexWrap: 'wrap',
// };

// const skillsLetter: CSSProperties = {
//     margin: 0,
//     lineHeight: 1,
// };

// const bigSkillsHeader: CSSProperties ={
//     display: 'block',
// };
// const smallSkillsHeader: CSSProperties ={
//     display: 'none',
// };

// const skill: CSSProperties = {
//     background: 'var(--object-clr)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '.5rem',
//     width: '7rem',
//     height: '7rem',
// };