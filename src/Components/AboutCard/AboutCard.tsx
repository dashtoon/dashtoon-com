import React from 'react';
import CustomizedButton from '../Button/Button';
import './AboutCard.css'

interface IProps {
    image: string;
    name: string;
    designation: string;
    experience: string[];
    linkedIn: string;
}

const AboutCard = (props: IProps) => {


    const handleClick = () => {
        window.open(props.linkedIn, '_blank')
    }
    return(
        <>
            <div className='card'>
                <img className='image' src={props.image} alt="img" />
                <div style={{textAlign: 'left'}}>
                    <div className='name'>
                        {props.name}
                    </div>
                    <div className='normal-text'>
                        {props.designation}
                    </div>
                    <div className='normal-text' style={{fontStyle: 'italic'}}>
                        {props.experience.map((exp) => (
                            <p>{exp}</p>
                        ))}
                    </div>
                    <div>
                   <CustomizedButton onClick={handleClick} title='LinkedIn' color='white' backgroundColor='#9f0521' hoverBackgroundColor='#ca0227' type='linkedIn'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard;