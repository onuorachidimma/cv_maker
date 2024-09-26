import editImage from "../assets/images/iconamoon_edit-fill (1).svg";
import otherImage from "../assets/images/Vector.svg";
import firstImage from "../assets/images/Frame 12501.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const RecentDocuments = () => {
  // Function to handle the button click
  const handleCreateCV = () => {
    console.log("Creating CV...");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h2 className="text-lg md:text-xl font-bold mb-4">Recent Documents</h2>

      {/* Responsive Button */}
      <button
        onClick={handleCreateCV}
        className="bg-customDarkGreen  text-white py-2 px-4 rounded-lg shadow-lg mb-4 hover:bg-customDarkGreen "
      >
        Create Your CV
      </button>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-xs md:text-sm">
                NAME
              </th>
              <th className="py-2 px-4 border-b text-left text-xs md:text-sm">
                DOCUMENT TYPE
              </th>
              <th className="py-2 px-4 border-b text-left text-xs md:text-sm">
                DATE CREATED
              </th>
              <th className="py-2 px-4 border-b text-left text-xs md:text-sm">
                LAST UPDATED
              </th>
              <th className="py-2 px-4 border-b text-left text-xs md:text-sm">
                ACTION
              </th>
              <th className="py-2 px-4 border-b text-left text-xs md:text-sm">
                OTHER
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-xs md:text-sm">CV1</td>
              <td className="py-2 px-4 border-b text-xs md:text-sm">
                <span className="inline bg-yellow-400 py-1 px-2 rounded">
                  CV
                </span>
              </td>
              <td className="py-2 px-4 border-b text-xs md:text-sm">
                2024-09-24
              </td>
              <td className="py-2 px-4 border-b text-xs md:text-sm">
                2024-09-25
              </td>
              <td className="py-2 px-4 border-b text-xs md:text-sm">
                <div className="flex items-center space-x-2">
                  <span>Edit</span>
                  <img
                    src={editImage}
                    alt="Edit icon"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                </div>
              </td>
              <td className="py-2 px-4 border-b text-xs md:text-sm">
                <div className="flex items-center space-x-2">
                  <img
                    src={otherImage}
                    alt="Other icon"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <span>Other</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className="text-2xl md:text-4xl mt-4 md:mt-6 font-bold">
        Accelerating Your Job Hunt
      </h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="w-[388px] h-[460px] bg-white rounded-lg border border-customDarkGreen shadow-md overflow-hidden">
          <img src={firstImage} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl">
              45 Engaging Ways to Introduce Your CV
            </h2>
            <p>
              Tired of the same old "Please find attached my CV"? Spice up your
              job applications with engaging and memorable introductions. Here
              are 45 alternative phrases to help you stand out from the crowd.
            </p>
            <Link className="text-customDarkGreen  cursor-pointer underline">
              Read Article
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[388px] h-[460px] bg-white rounded-lg border border-customDarkGreen shadow-md overflow-hidden">
          <img src={firstImage} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl">
              Networking Strategies for Job Seekers
            </h2>
            <p>
              In today's competitive job market, effective networking can be the
              key to unlocking new opportunities. Discover innovative ways to
              connect with industry professionals, attend networking events, and
              leverage online platforms to expand your network.
            </p>
            <Link className="text-customDarkGreen  cursor-pointer underline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[388px] h-[460px] bg-white rounded-lg border border-customDarkGreen shadow-md overflow-hidden">
          <img src={firstImage} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl">
              Mastering Your Online Presence
            </h2>
            <p>
              Your online presence can significantly impact your job search.
              Learn how to create a compelling personal brand on platforms like
              LinkedIn, GitHub, or your own portfolio website.
            </p>
            <Link className="text-customDarkGreen cursor-pointer underline">
              Discover How
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDocuments;
