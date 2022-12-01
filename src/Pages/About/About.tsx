import React from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";
import './About.css'
import SanidhyaPhoto from '../../Assets/Images/Sanidhya.webp'
import LalithPhoto from '../../Assets/Images/Lalith.webp'
import SoumyadeepPhoto from '../../Assets/Images/Soumyadeep.webp';
;

const data = [
    {
        name: "Sanidhya Narain",
        designation: "Co-Founder",
        image: SanidhyaPhoto,
        experience: ['Founding Member - Head of Content, Pocket FM', 'Regional Manager - Shell', 'Assistant Branch Manager - ITC', 'Co-Founder - Getwings'],
        linkedIn: 'https://www.linkedin.com/in/sanidhyanarain/'
    },
    {
        name: "Lalith Gudipati",
        designation: "Co-Founder",
        image: LalithPhoto,
        experience: ['Founding Member - Head of Content, Pocket FM', 'Founder - Prachaar', 'Sr. Growth Manager - Moonfrog Labs', 'Business Analyst - Flipkart'],
        linkedIn: 'https://www.linkedin.com/in/lalithgudipati/'
    },
    {
        name: "Soumyadeep Mukherjee",
        designation: "Co-Founder",
        image: SoumyadeepPhoto,
        experience: ['Associate Director - Technology, Udaan', 'Founding Engineer - Morphle Labs', 'Software Engineer - Appdynamics'],
        linkedIn: 'https://www.linkedin.com/in/soumyadeepmukherjee/'
    },

]

const About = () => {
    return(
        <>
        <div className="about">
            {data.map((d) => (
                <AboutCard name={d.name} image={d.image} experience={d.experience} designation={d.designation} linkedIn={d.linkedIn}/>
            ))}
            
        </div>
        </>
    )
}

export default About