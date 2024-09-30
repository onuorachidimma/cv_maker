import React from 'react';
import DesignedTemplate from "../../assets/images/designed-template.svg";
import WrittenTemplate from "../../assets/images/written-template.svg";
import ApplicationTemplate from "../../assets/images/application-template.svg";

const BuildCV = () => {
    return (
        <div className="flex flex-col items-center text-center p-10 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Create a job-winning CV in minutes</h1>
           <div className="flex space-x-8 justify-center mb-4">
  <div className="relative text-center">
    <div className="absolute top-0 left-0 bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
      1
    </div>
    <img src={DesignedTemplate} alt="Designed" className="mb-4" />
    <p className="font-medium">Choose your professionally designed template</p>
  </div>
  <div className="flex items-center text-center">
    <div className="flex items-center justify-center bg-yellow-400 text-white rounded-full w-10 h-10 mr-4">
      2
    </div>
    <div>
      <img src={WrittenTemplate} alt="Written" className="mb-4" />
      <p className="font-medium">Add pre-written examples to each section</p>
    </div>
  </div>
  <div className="flex items-center text-center">
    <div className="flex items-center justify-center bg-yellow-400 text-white rounded-full w-10 h-10 mr-4">
      3
    </div>
    <div>
      <img src={ApplicationTemplate} alt="Application" className="mb-4" />
      <p className="font-medium">Download and start applying</p>
    </div>
  </div>
</div>
      <button className="bg-green-500 text-white px-28 py-3 rounded-lg hover:bg-green-600">
            Let's get started
      </button>
      <p className="text-gray-600">
       By clicking Let's Go, you agree to our <a href="#" className="text-green-600 underline">Terms of Use</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>
      </p>
   </div>
    );
}

export default BuildCV;