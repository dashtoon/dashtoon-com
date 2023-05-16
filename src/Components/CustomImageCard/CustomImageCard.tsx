import React from 'react';
import './CustomImageCard.css';

interface CustomImageCardProps {
  imageSrc: string;
  name: string;
}

const CustomImageCard: React.FC<CustomImageCardProps> = ({
  imageSrc,
  name,
}) => {
  return (
    <div className='custom-image-card'>
      <img src={imageSrc} alt={name} className='card-image' />
      <div className='card-name'>{name}</div>
    </div>
  );
};

export default CustomImageCard;
