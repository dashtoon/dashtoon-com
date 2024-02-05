import React from 'react';
import '../styles/companyMobileStyles.css';
import {Person} from "../types/peopleData";
import FooterMobile from "../Components/FooterMobile";
import NavbarMobile from "../Components/NavbarMobile";

const peopleData: Person[] = [
    {id: 1, name: 'Madhur', position: 'Growth', imageSrc: require('../assets/images/people/Madhur.png')},
    {id: 2, name: 'Paritosh', position: 'Content', imageSrc: require('../assets/images/people/Paritosh.png')},
    {id: 3, name: 'Soumyadeep', position: 'CTO', imageSrc: require('../assets/images/people/Soumyadeep.png')},
    {id: 4, name: 'Lalith', position: 'COO', imageSrc: require('../assets/images/people/Lalith.png')},
    {id: 5, name: 'Sanidhya', position: 'CEO', imageSrc: require('../assets/images/people/Sand.png')},
    {id: 6, name: 'Amogh', position: 'Product-AI', imageSrc: require('../assets/images/people/Amogh.png')},
    {id: 7, name: 'Rishi', position: 'Product-Apps', imageSrc: require('../assets/images/people/Rishi.png')},
];

const CompanyContentMobile = () => {
    return (
        <div className="company-content-mobile">

            <div className="about-mobile">
                <NavbarMobile/>
                <div className="heading-about-mobile">
                    Pioneering the Comic Revolution
                </div>
                <p>
                    Dashtoon was founded in December 2022. Our mission is simple yet bold: to blend cutting-edge AI with
                    creative storytelling. Based in San Francisco and London, we're setting new standards in digital
                    comics, turning storytellers into artists with groundbreaking technology.
                </p>
            </div>

            <div className="people-mobile">
                <h2>Meet the Minds</h2>
                {/* People container - You can add individual person components here */}
                <div className="people-web-container-mobile">
                    {/* Map through the peopleData array and create individual person cards */}
                    {peopleData.map(person => (
                        <div key={person.id} className="person-card-mobile">
                            <img className="person-image-mobile" src={person.imageSrc} alt={person.name}/>
                            <div className="person-name-mobile">{person.name}</div>
                            <div className="person-position-mobile">{person.position}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="play-store-award-mobile">
                <div className="play-store-info-mobile">
                    <p>Dashtoon was awarded</p>
                    <p>“Best for Fun App”</p>
                </div>
                <div className="play-store-image-mobile"></div>
            </div>
            <FooterMobile/>
        </div>
    );
};

export default CompanyContentMobile;
