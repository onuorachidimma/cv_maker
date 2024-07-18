import React, { useState } from 'react';
import Carousel1 from '../../assets/images/Carousel1.svg';
import Carousel2 from '../../assets/images/Carousel.svg';
import Carousel3 from '../../assets/images/Carousel1.svg';

const images = [
  { src: Carousel1, alt: 'CaroselCVImage 1' },
  { src: Carousel2, alt: 'CaroselCVImage 2' },
  { src: Carousel3, alt: 'CaroselCVImage 3' },
];

const CvTemplate = () => {
  const [current, setCurrent] = useState(0);

  const handleMouseEnter = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-20 w-full">
      <h1 className="text-center text-4xl font-bold mb-14">Templates to win recruiters over</h1>
      <div className="relative w-1/4 flex justify-center items-center flex-row">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full transition-transform duration-300 ${
              index === current ? 'transform scale-110 z-10' : 'transform scale-100'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        ))}
      </div>
      <div className="flex mt-4 pt-8 flex-row justify-content: center">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-customDarkGreen' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CvTemplate;