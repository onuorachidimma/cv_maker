import React from 'react';
import MelanCoverLetter from "../../assets/images/melanCoverLetter.svg";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Hi Jordan 👋</h1>
          <p className="text-xl">Jordan, Present your best self with our personalized application tools.</p>
        </div>

        {/* Main Content */}
        <div className="mt-8 flex gap-8">
          {/* Left Side - CV Preview */}
          <div className="w-1/2 bg-white p-6 rounded-md shadow-md">
            <img
              src={MelanCoverLetter}
              alt="Melan"
              className="rounded-md w-full"
            />
          </div>

          {/* Right Side - Cover Letter Section */}
          <div className="w-1/2">
            <div className="bg-green-100 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold">Gain a competitive edge with a professional cover letter.</h2>
              <p className="mt-4">A professional cover letter tailored to the job you're applying for puts you one step ahead of the competition.</p>
              <ul className="mt-4 list-disc list-inside">
                <li>No writing skills required</li>
                <li>Modern design</li>
                <li>Ready in seconds</li>
              </ul>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="bg-blue-200 w-48 h-48 rounded-md flex items-center justify-center">
                {/* Placeholder for future content */}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <button className="bg-yellow-400 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-500">
            Create new CV
          </button>
          <button className="bg-yellow-400 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-500">
            Create new cover letter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
