import malta from '../../assets/photos/malta.jpeg';
import maltaS from '../../assets/photos/maltaS.jpeg';
import traveling from '../../assets/photos/traveling.jpeg';
import travelingS from '../../assets/photos/travelingS.jpeg';
import nature from '../../assets/photos/nature.jpg';
import natureS from '../../assets/photos/natureS.jpg';
import gadget from '../../assets/photos/gadgets.jpeg';
import gadgetS from '../../assets/photos/gadgetsS.jpeg';
import '../css/about.css';

interface AboutDetail {
    bigImage: string;
    samllImage: string;
    text: string;
    flex?: string;
    margin: string; 
};

export default function About() {

    const aboutDetails: AboutDetail[] = [
        {
            bigImage: gadget,
            samllImage: gadgetS,
            text: 'I am an aspiring frontend developer studying at Medieinstitutet in Gothenburg. I will graduate in may 2022. ',
            flex: 'flexEnd',
            margin: 'aboutRight card'
        },{
            bigImage: malta,
            samllImage: maltaS,
            text: 'I’ve been living and working in Malta for 1.5 years which was a great experience. I learned so much and made friends for life.',
            margin: 'aboutLeft card'
        },{
            bigImage: traveling,
            samllImage: travelingS,
            text: 'Sounds like a cliche to say I love traveling but so be it. Together with my backpack and friends I have been traveling around the world. I love exploring every different area with people and nature. Everything from jumping out of a plane to diving down with the fishes.',
            flex: 'flexEnd',
            margin: 'aboutRight card'
        },{
            bigImage: nature,
            samllImage: natureS,
            text: 'When lack of inspiration I always turn to nature with my family and friends. There is no such thing as watching every element and all the lives of nature.',
            margin: 'aboutLeft card'
        },
    ];

    return (
        <div id="about" className="aboutArea flex">
            <h2 className="aboutTitle">About</h2>
            <div>
                {aboutDetails.map((aboutDetail, index) =>
                    <div key={index}>
                        <div className={aboutDetail.flex}>
                            <div className={aboutDetail.margin}>
                                <img src={aboutDetail.samllImage} alt="Card Back" width="100%" height="100%" />
                                <div className="img-top">
                                    <img src={aboutDetail.bigImage} alt="Card Front" width="100%" />
                                    <p className="aboutText">
                                        {aboutDetail.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};