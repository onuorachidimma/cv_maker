import React from 'react';
import BuildCv1 from "../../assets/images/buildCv1.svg";
import BuildCv2 from "../../assets/images/buildCv2.svg";
import BuildCv3 from "../../assets/images/buildCv3.svg";

const BuildCV = () => {
    return (
        <div className="flex flex-col items-center text-center p-10 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Create a job-winning CV in minutes</h1>
            <div className="flex space-x-8 justify-center">
                <div className="text-center">
                    <div className="text-6xl text-yellow-400 mb-2">1</div>
                    <img src={BuildCv1} alt="CV1" className="mb-4" />
                    <p className="font-medium">Choose your professionally designed template</p>
                </div>
                <div className="text-center">
                    <div className="text-6xl text-yellow-400 mb-2">2</div>
                    <img src={BuildCv2} alt="CV2" className="mb-4" />
                    <p className="font-medium">Add pre-written examples to each section</p>
                </div>
                <div className="text-center">
                    <div className="text-6xl text-yellow-400 mb-2">3</div>
                    <img src={BuildCv3} alt="CV3" className="mb-4" />
                    <p className="font-medium">Download and start applying</p>
                </div>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Let's get started
            </button>
            <p className="text-gray-600">
                By clicking Let's Go, you agree to our <a href="#" className="text-green-600 underline">Terms of Use</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>
            </p>
        </div>
    );
}

export default BuildCV;
