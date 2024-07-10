import React, { useState, useEffect } from 'react';


const cvTemplate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { src: 'src/assets/images/Carousel1.svg', alt: 'Image 1' },
    { src: 'src/assets/images/Carousel.svg', alt: 'Image 2' },
    { src: 'src/assets/images/Carousel1.svg', alt: 'Image 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-4xl font-bold mb-6">Templates to win recruiters over</h1>
      <div className="flex justify-center">
        <div className="carousel-container flex items-center space-x-4 overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item flex items-center justify-center bg-white p-4 rounded-lg transition-transform duration-500 ${
                currentIndex === index
                  ? 'transform scale-110'
                  : 'transform scale-90'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default cvTemplate;
