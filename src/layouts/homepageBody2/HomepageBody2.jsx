import React from 'react';
import smileyman from '../../assets/images/smileyman.png';

const HomepageBody2 = () => {
  return (
    <>
      

      <div class="bg-customYellow flex items-center justify-center h-96 pb-10">
        <div className="w-1/4 h-60">
          <img src={smileyman} alt="Smiley Man" style={{ objectFit: 'contain' }} />
        </div>
        <div class= "bg-customYellowB px-2 w-1/8 h-44 flex justify-center items-center mt-12">
          <h1 class="text-5xl font-bold max-w-md mx-auto flex text-center">Features Tailored for Your Success</h1>
        </div>
      </div>

    </>
  );
};

export default HomepageBody2;