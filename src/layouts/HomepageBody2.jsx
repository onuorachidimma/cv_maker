import React from 'react';

const HomepageBody2 = () => {
  return (
    <>
      
      <div className="container lg:grid-cols-3 bg-green-200 h-70 flex items-center justify-center p-10">
        <div className="card h-64 bg-white p-4 m-10 rounded-lg w-full"><h1>Section 1</h1></div>
        <div className="card h-64 bg-white p-4 m-10 rounded-lg w-full"><h1>Section 2</h1></div>
        <div className="card h-64 bg-white p-4 m-10 rounded-lg w-full"><h1>Section 3</h1></div>
      </div>

      <div class="bg-customYellow p-4 flex space-x-4 items-center justify-center mt-20 h-60">
        <div class="bg-customYellowB px-4 w-1/4 h-40">
          <h1 class="text-xl font-bold mb-2">Narrow Card</h1>
          <p class="text-gray-700">Card1</p>
        </div>
        <div class="bg-customYellowB px-4 w-1/2 h-40">
          <h1 class="text-xl font-bold mb-2">Wider Card</h1>
          <p class="text-gray-700">Card2</p>
        </div>
      </div>
    </>
  );
};

export default HomepageBody2;