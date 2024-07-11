import React from 'react';
import smileyman from '../../assets/images/smileyman.png';

const HomepageBody2 = () => {
  return (
    <>
      

      <div class="bg-customYellow p-4 flex space-x-4 items-center justify-center mt-20 h-96">
        <div className="bg-customYellowB  w-1/4 h-60">
          <img src={smileyman} alt="Smiley Man" style={{ objectFit: 'contain' }} />
        </div>
        <div class= "bg-customYellowB px-4 w-1/8 h-40 flex justify-center items-center">
          <h1 class=" bg-red-500 text-5xl font-bold mb-2 text-left max-w-md mx-auto flex items-center justify-center ">Features Tailored for Your Success</h1>
        </div>
      </div>

    </>
  );
};

export default HomepageBody2;