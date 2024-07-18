import React from 'react';
import smileyman from '../../assets/images/smileyman.png';

const HomepageBody2 = () => {
  return (
    <>

      <div class="bg-customYellow lg:flex lg:flex-row items-center justify-center h-96 pb-10 sm:flex sm:flex-col sm:justify-center sm:items-center">
        <div className="lg:w-1/4 lg:h-60 sm:flex-col sm:flex">
          <img src={smileyman} alt="Smiley Man" style={{ objectFit: 'contain' }} />
        </div>
        <div class= "bg-customYellowB px-2 lg:w-1/8 lg:h-44 flex lg:flex-row justify-center items-center lg:mt-12 sm:flex-col">
          <h1 class="lg:text-5xl font-bold max-w-md mx-auto flex text-center sm:flex-col text-3xl  ">Features Tailored for Your Success</h1>
        </div>
      </div>



    </>
  );
};

export default HomepageBody2;