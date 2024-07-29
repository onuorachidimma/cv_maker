import React, { useState } from "react";
import HomepageNavbar from "../layouts/HomepageNavbar";
import SectionHeading from "../layouts/homepageBody1/sectionHeading";

const CVRanker = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [rank, setRank] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileUrl(URL.createObjectURL(selectedFile));
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleRankCV = async () => {
    if (!file || !jobDescription) {
      alert("Please provide a job description and a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("resume_file", file);

    try {
      const response = await fetch(
        "https://api.autogon.ai/api/v1/services/rank-resume/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "X-AUG-KEY": "pLz5bHhV.0AkYcrfs2zdGSpme841844NtE7cACtac",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error details:", errorDetails);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response payload:", data); // Log the response payload

      // Extract the rank from the data field
      setRank(data.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error ranking resume:", error);
      alert("An error occurred while ranking the resume. Please try again.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <HomepageNavbar />
      <div className="w-7/12 ml-20">
        <div className="mt-20 w-full">
          <SectionHeading heading="CV Ranker" />
          <label htmlFor="jobDescription" className="font-semibold block">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            cols="30"
            rows="10"
            placeholder="Type or Paste a detailed job description text here"
            className="border border-black w-full p-4"
            onChange={handleJobDescriptionChange}
          ></textarea>
        </div>
        {/* UPLOAD CV */}
        <div className="flex flex-col">
          <input
            type="file"
            id="file-upload"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="w-6/12 cursor-pointer inline-block text-sm text-center font-bold text-black bg-customBrightYellow rounded-full py-2 mt-8"
          >
            Upload CV
          </label>
          {file && (
            <div className="mt-4 p-4 border rounded-lg w-full">
              <div className="mt-4 border rounded-lg w-full h-96 overflow-auto">
                <embed
                  src={fileUrl}
                  width="100%"
                  height="100%"
                  type="application/pdf"
                  className="border-none"
                  style={{ overflow: "auto" }}
                ></embed>
              </div>
              <p className="mt-2 text-sm text-gray-600">{file.name}</p>
            </div>
          )}
        </div>

        {file && (
          <button
            className="w-6/12 cursor-pointer inline-block text-sm text-center font-bold text-black bg-customBrightYellow rounded-full py-2 mt-8"
            onClick={handleRankCV}
          >
            Rank CV
          </button>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg w-6/12 text-center">
              <h2 className="text-2xl font-bold mb-4">CV Rank</h2>
              <p>Your CV rank is: {rank}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVRanker;
