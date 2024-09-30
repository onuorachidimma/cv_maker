import React from "react";
import CvSectionHeader from "./cvSectionHeader";

const CVForm = ({
  activeSection,
  formData,
  handleInputChange,
  handleAddItem,
  handleRemoveItem,
  handleNext,
  handlePrevious,
}) => {
  switch (activeSection) {
    case "contact":
      return (
        <div className="w-full p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            <CvSectionHeader letter1="Contact" letter2="information" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={(e) => handleInputChange(e, "contact", "name")}
            />
            <input
              type="text"
              placeholder="Short Bio"
              className="block w-full p-2 border border-gray-300 rounded-md"
              value={formData.summary}
              onChange={(e) => handleInputChange(e, "contact", "summary")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Email"
              className="block w-full p-2 border border-gray-300 rounded-md"
              value={formData.contact.email}
              onChange={(e) => handleInputChange(e, "contact", "email")}
            />
            <input
              type="text"
              placeholder="Address"
              className="block w-full p-2 border border-gray-300 rounded-md"
              value={formData.contact.address}
              onChange={(e) => handleInputChange(e, "contact", "address")}
            />
            <input
              type="text"
              placeholder="Phone"
              className="block w-full p-2 border border-gray-300 rounded-md"
              value={formData.contact.phone}
              onChange={(e) => handleInputChange(e, "contact", "phone")}
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      );

    case "experience":
      return (
        <div className="w-full p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            <CvSectionHeader letter1="Add your" letter2="experience" />
          </h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                placeholder="Position"
                className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                value={exp.position}
                onChange={(e) =>
                  handleInputChange(e, "experience", "position", index)
                }
              />
              <input
                type="text"
                placeholder="Company"
                className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                value={exp.company}
                onChange={(e) =>
                  handleInputChange(e, "experience", "company", index)
                }
              />
              <textarea
                placeholder="Description"
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={exp.description}
                onChange={(e) =>
                  handleInputChange(e, "experience", "description", index)
                }
              />
              {formData.experience.length > 1 && (
                <button
                  className="mt-2 text-red-600"
                  onClick={() => handleRemoveItem("experience", index)}
                >
                  Remove Experience
                </button>
              )}
            </div>
          ))}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleAddItem("experience")}
          >
            Add More Experience
          </button>
          <div className="flex justify-between mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      );

    case "education":
      return (
        <div className="w-full p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            <CvSectionHeader letter1="Add your" letter2="education" />
          </h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                placeholder="Degree"
                className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                value={edu.degree}
                onChange={(e) =>
                  handleInputChange(e, "education", "degree", index)
                }
              />
              <input
                type="text"
                placeholder="Institution"
                className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                value={edu.institution}
                onChange={(e) =>
                  handleInputChange(e, "education", "institution", index)
                }
              />
              <input
                type="text"
                placeholder="Year"
                className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                value={edu.year}
                onChange={(e) =>
                  handleInputChange(e, "education", "year", index)
                }
              />
              {formData.education.length > 1 && (
                <button
                  className="mt-2 text-red-600"
                  onClick={() => handleRemoveItem("education", index)}
                >
                  Remove Education
                </button>
              )}
            </div>
          ))}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleAddItem("education")}
          >
            Add More Education
          </button>
          <div className="flex justify-between mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      );

    case "skill":
      return (
        <div className="w-full p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            <CvSectionHeader letter1="Add your" letter2="skill" />
          </h2>
          {formData.skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                placeholder="Skill"
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={skill}
                onChange={(e) => handleInputChange(e, "skill", "skill", index)}
              />
              {formData.skills.length > 1 && (
                <button
                  className="mt-2 text-red-600"
                  onClick={() => handleRemoveItem("skill", index)}
                >
                  Remove Skill
                </button>
              )}
            </div>
          ))}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleAddItem("skill")}
          >
            Add More Skills
          </button>
          <div className="flex justify-between mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default CVForm;
