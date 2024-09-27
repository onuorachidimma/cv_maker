import React from 'react';
import TickIcon from "../assets/images/tick.svg"
import YellowIcon from "../assets/images/yellow-tick.svg"



//The tiny top right boxes
const SubscriptionBox = () => {
  return (
    <div className="relative -top-8 -right-40 bg-customDarkGreen text-white px-4 py-2 rounded-sm w-fit">
     Free
    </div>
  );
};



const subscriptionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-3xl font-bold mb-8">Choose Your Plan</h1>
      <div className="flex space-x-8">
        <div className="bg-green-50 rounded-lg shadow-md p-8 border border-green-500">
             <SubscriptionBox />
          <p className="text-black font-bold text-2xl mb-6 px-8">$0/Month</p>
          <button className="bg-customYellow text-black px-16 py-2 rounded-sm hover:bg-customDarkGreen">Sign Up</button>
          <h4 className="text-xl font-semibold mb-4 mt-4">Features Include:</h4>
          <ul className="mt-4">
            <li className="flex items-center">
            <img src={TickIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Create CV
            </li>
            <li className="flex items-center">
              <img src={TickIcon} alt="Tick" className='h-5 w-5 mr-2' />  
              Edit CV
            </li>
            <li className="flex items-center">
              <img src={TickIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Download (jpg, doc)
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 rounded-lg shadow-md p-8 border border-yellow-500">
        <div className="relative -top-8 -right-48 bg-customYellow text-white px-4 py-2 rounded-sm w-fit">
        Basic
        </div>
          <p className="text-black font-bold text-2xl mb-6 px-8">$7/Month</p>
          <button className="bg-customYellow text-black px-16 py-2 rounded-sm hover:bg-customDarkGreen">Sign Up</button>
          <h4 className="text-xl font-semibold mb-4 mt-4">Features Include:</h4>
          <ul className="mt-4">
            <li className="flex items-center">
              <img src={YellowIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Create CV
            </li>
            <li className="flex items-center">
              <img src={YellowIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Edit CV
            </li>
            <li className="flex items-center">
              <img src={YellowIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Create Cover Letter
            </li>
            <li className="flex items-center">
              <img src={YellowIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Edit Cover Letter
            </li>
            <li className="flex items-center">
              <img src={YellowIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Rank CV
            </li>
            <li className="flex items-center">
              <img src={YellowIcon} alt="Tick" className='h-5 w-5 mr-2' />
              Download (PDF, jpg, doc)
            </li>
            <p className="mt-2 text-black font-bold text-2xl mb-6">
              $67/year <span className="text-customDarkGreen text-xs">Annually Save $17</span>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default subscriptionPage;