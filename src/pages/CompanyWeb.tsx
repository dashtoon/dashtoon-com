import React, {useEffect} from 'react';
import NavbarWeb from '../Components/NavbarWeb'; // Import your Navbar component
import FooterWeb from '../Components/FooterWeb'; // Import your Footer component
import '../styles/companyWebStyles.css';
import {Person} from "../types/peopleData";
import DashtoonInTheNews from "../Components/DashtoonInTheNews";

const peopleData: Person[] = [
    {id: 1, name: 'Madhur', position: 'Growth', imageSrc: require('../assets/images/people/Madhur.png')},
    {id: 2, name: 'Paritosh', position: 'Content', imageSrc: require('../assets/images/people/Paritosh.png')},
    {id: 3, name: 'Soumyadeep', position: 'CTO', imageSrc: require('../assets/images/people/Soumyadeep.png')},
    {id: 4, name: 'Lalith', position: 'COO', imageSrc: require('../assets/images/people/Lalith.png')},
    {id: 5, name: 'Sanidhya', position: 'CEO', imageSrc: require('../assets/images/people/Sand.png')},
    {id: 6, name: 'Amogh', position: 'Product-AI', imageSrc: require('../assets/images/people/Amogh.png')},
    {id: 7, name: 'Rishi', position: 'Product-Apps', imageSrc: require('../assets/images/people/Rishi.png')},
];

const CompanyContentWeb = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="company-content-web">
            <NavbarWeb currentPage={'company'}/>
            <div className="about">
                <div className="heading-about-web">
                    Pioneering the Comic Revolution
                </div>
                <p>
                    Dashtoon was founded in December 2022. Our mission is simple yet bold: to blend cutting-edge AI with
                    creative storytelling. Based in San Francisco and London, we're setting new standards in digital
                    comics, turning storytellers into artists with groundbreaking technology.
                </p>
            </div>

            <div className="people-web">
                <h2>Meet the Minds</h2>
                {/* People container - You can add individual person components here */}
                <div className="people-web-container">
                    {/* Map through the peopleData array and create individual person cards */}
                    {peopleData.map(person => (
                        <div key={person.id} className="person-card">
                            <img className="person-image" src={person.imageSrc} alt={person.name}/>
                            <div className="person-name">{person.name}</div>
                            <div className="person-position">{person.position}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="play-store-award">
                <div className="play-store-info">
                    <p>Dashtoon was awarded</p>
                    <p>“Best for Fun App”</p>
                </div>
                <div className="play-store-image"></div>
            </div>
            <DashtoonInTheNews></DashtoonInTheNews>
            <FooterWeb/>
        </div>
    );
};

export default CompanyContentWeb;