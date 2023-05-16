import React from 'react';
import CustomImageCard from '../CustomImageCard/CustomImageCard';
import './HorizontalImageList.css';

interface ImageData {
  imageSrc: string;
  name: string;
}

interface HorizontalImageListProps {
  images: ImageData[];
}

const HorizontalImageList: React.FC<HorizontalImageListProps> = ({
  images,
}) => {
  return (
    <div className='horizontal-image-list'>
      {images.map((image, index) => (
        <CustomImageCard
          key={index}
          imageSrc={image.imageSrc}
          name={image.name}
        />
      ))}
    </div>
  );
};

export default HorizontalImageList;
