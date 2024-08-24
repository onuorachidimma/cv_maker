import { useState } from "react";
import HomepageNavbar from "../layouts/HomepageNavbar";
import SectionHeading from "../layouts/homepageBody1/sectionHeading";
import SignupFreeButton from "../layouts/buttons/signupFreeBtn";
import checkIcon from "../assets/images/checkIcon.svg";
import closeIcon from "../assets/images/closeIcon.svg";


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
            "X-AUG-KEY": import.meta.env.VITE_AUG_API_KEY,
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
    <div className="">
      <HomepageNavbar />
      <div className="w-[80%] m-auto lg:w-7/12 lg:ml-20 mb-32">
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
            <div className="bg-white p-8 md:p-16 lg:p-20 rounded shadow-lg w-9/12 md:w-6/12 lg:w-5/12 text-center relative">
              <div
                onClick={closeModal}
                className="absolute top-0 right-0 m-4 lg:m-8 h-5 w-5 cursor-pointer"
              >
                <img
                  src={closeIcon}
                  className="w-[100%] h-[100%]"
                  alt="close icon"
                />
              </div>
              <div className="flex justify-center mb-12 mt-8">
                <img className="h-28 w-28" src={checkIcon} alt="" />
              </div>
              <p className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 text-customDarkGreen">
                The CV match is <br />{" "}
                <span className="text-2xl sm:text-3xl md:text-5xl">{rank}</span>
              </p>

              <div className="flex justify-center">
                {/* Add link to prompt */}
                <SignupFreeButton prompt="Upgrade your CV here" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVRanker;
