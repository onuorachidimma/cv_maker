import React from "react";

const CVTemplateMini = ({ formData }) => {
  const { name, summary, contact, experience, skills, education } = formData;

  return (
    <>
      <div className="w-[50%] m-auto mt-[100px]">
        <div className="p-8  bg-white m-auto rounded-lg">
          <div className="mb-4">
            <h1 className="text-sm font-bold text-gray-900">
              {name || "Your Name"}
            </h1>
            <p className="text-gray-600 mt-2 text-xs">
              {summary || "A brief professional summary..."}
            </p>
          </div>

          <div className="bg-blue-600 text-white p-4 text-xs rounded-md mb-4">
            <div>Email: {contact.email || "Email"}</div>
            <div>Address: {contact.address || "Address"}</div>
            <div>Phone: {contact.phone || "Phone Number"}</div>
          </div>

          <h2 className="font-bold text-sm mb-2">Work History</h2>
          {experience.length > 0 ? (
            experience.map((exp, index) => (
              <div key={index} className="mb-2 text-xs">
                <h3 className="font-semibold">{exp.position || "Position"}</h3>
                <p>{exp.company || "Company"}</p>
                <p>{exp.description || "Job description"}</p>
              </div>
            ))
          ) : (
            <p>No experience added yet.</p>
          )}

          <h2 className="font-bold text-sm mb-2">Skills</h2>
          <ul className="list-disc pl-5 text-xs">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <li key={index}>{skill || "Skill"}</li>
              ))
            ) : (
              <p>No skills added yet.</p>
            )}
          </ul>

          <h2 className="font-bold text-sm mb-2">Education</h2>
          {education.length > 0 ? (
            education.map((edu, index) => (
              <div key={index} className="mb-2 text-xs">
                <h3>{edu.degree || "Degree"}</h3>
                <p>{edu.institution || "Institution"}</p>
                <p>{edu.year || "Year"}</p>
              </div>
            ))
          ) : (
            <p>No education details added yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CVTemplateMini;
