// import HomepageNavbar from "../layouts/HomepageNavbar";
// import SectionHeading from "../layouts/homepageBody1/sectionHeading";
// import React, { useState } from "react";
// const CVRanker = () => {
//   const [file, setFile] = useState(null);
//   const [fileUrl, setFileUrl] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setFileUrl(URL.createObjectURL(selectedFile));
//   };
//   return (
//     <div>
//       <HomepageNavbar />
//       <div className="mt-20 ml-20">
//         <SectionHeading heading="CV Ranker" />
//         <label htmlFor="jobDescription" className="font-semibold block">
//           Job Description
//         </label>
//         <textarea
//           name="jobDesciption"
//           id="jobDescription"
//           cols="30"
//           rows="10"
//           placeholder="Type or Paste a detailed job description text here"
//           className="border border-black w-7/12"
//         ></textarea>
//       </div>
//       {/* UPLOAD CV */}
//       <div className="flex flex-col items-center p-4">
//         <input
//           type="file"
//           id="file-upload"
//           accept=".pdf,.doc,.docx"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//         <label
//           htmlFor="file-upload"
//           className="cursor-pointer inline-block text-sm font-medium text-violet-700 bg-violet-50 rounded-full py-2 px-4 hover:bg-violet-100"
//         >
//           Upload CV
//         </label>
//         {file && (
//           <div className="mt-4 p-4 border rounded-lg w-full">
//             <h2 className="text-lg font-medium text-gray-900">Uploaded CV</h2>
//             <p className="mt-2 text-sm text-gray-600">{file.name}</p>
//             <div className="mt-4 border rounded-lg w-full h-96 overflow-auto">
//               <embed
//                 src={fileUrl}
//                 width="100%"
//                 height="100%"
//                 type="application/pdf"
//                 className="border-none"
//                 style={{ overflow: "auto" }}
//               ></embed>
//             </div>
//           </div>
//         )}
//       </div>

//       <button className="text-center bg-red-300">Rank CV</button>
//     </div>
//   );
// };
// export default CVRanker;


// import React, { useState } from "react";
// import HomepageNavbar from "../layouts/HomepageNavbar";
// import SectionHeading from "../layouts/homepageBody1/sectionHeading";
// // import { Client } from 'autogonai-node'; // Import the SDK client
// import { Client } from "autogonai-node";

// // Initialize the Autogon client with your API key

// const client = new Client('pLz5bHhV.0AkYcrfs2zdGSpme841844NtE7cACtac');

// const CVRanker = () => {
//   const [file, setFile] = useState(null);
//   const [fileUrl, setFileUrl] = useState(null);
//   const [jobDescription, setJobDescription] = useState("");
//   const [rank, setRank] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setFileUrl(URL.createObjectURL(selectedFile));
//   };

//   const handleJobDescriptionChange = (event) => {
//     setJobDescription(event.target.value);
//   };

//   const handleRankCV = async () => {
//     if (!file || !jobDescription) {
//       alert("Please provide both a job description and a resume file.");
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("job_description", jobDescription);
//     formData.append("resume_file", file);

//     try {
//       // Make API request using the Autogon SDK
//       const response = await client.someApiMethod({
//         method: "POST",
//         url: "/api/v1/services/rank-resume/",
//         headers: {
//           "Accept": "application/json",
//           // No need to set Authorization header here as it’s handled by the SDK
//         },
//         data: formData,
//       });

//       setRank(response.data.rank); // Adjust according to the SDK's response structure
//       setShowModal(true);
//     } catch (error) {
//       console.error("Error ranking resume:", error);
//       alert("An error occurred while ranking the resume. Please try again.");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <HomepageNavbar />
//       <div className="mt-20 ml-20">
//         <SectionHeading heading="CV Ranker" />
//         <label htmlFor="jobDescription" className="font-semibold block">
//           Job Description
//         </label>
//         <textarea
//           name="jobDescription"
//           id="jobDescription"
//           cols="30"
//           rows="10"
//           placeholder="Type or Paste a detailed job description text here"
//           className="border border-black w-7/12"
//           onChange={handleJobDescriptionChange}
//         ></textarea>
//       </div>
//       {/* UPLOAD CV */}
//       <div className="flex flex-col items-center p-4">
//         <input
//           type="file"
//           id="file-upload"
//           accept=".pdf,.doc,.docx"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//         <label
//           htmlFor="file-upload"
//           className="cursor-pointer inline-block text-sm font-medium text-violet-700 bg-violet-50 rounded-full py-2 px-4 hover:bg-violet-100"
//         >
//           Upload CV
//         </label>
//         {file && (
//           <div className="mt-4 p-4 border rounded-lg w-full">
//             <h2 className="text-lg font-medium text-gray-900">Uploaded CV</h2>
//             <p className="mt-2 text-sm text-gray-600">{file.name}</p>
//             <div className="mt-4 border rounded-lg w-full h-96 overflow-auto">
//               <embed
//                 src={fileUrl}
//                 width="100%"
//                 height="100%"
//                 type="application/pdf"
//                 className="border-none"
//                 style={{ overflow: "auto" }}
//               ></embed>
//             </div>
//           </div>
//         )}
//       </div>

//       <button className="text-center bg-red-300" onClick={handleRankCV}>
//         Rank CV
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">CV Rank</h2>
//             <p>Your CV rank is: {rank}%</p>
//             <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CVRanker;

 