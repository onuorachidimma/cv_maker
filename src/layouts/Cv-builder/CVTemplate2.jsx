import React from 'react';
import jsPDF from 'jspdf';

const CVTemplate = ({ formData }) => {
  const { name, summary, contact, experience, skills, education } = formData;

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(name || "Your Name", 20, 20);

    doc.setFontSize(16);
    doc.text("Professional Summary", 20, 30);
    doc.setFontSize(12);
    doc.text(summary || "A brief professional summary...", 20, 40);

    doc.setFontSize(16);
    doc.text("Contact Information", 20, 60);
    doc.setFontSize(12);
    doc.text(`Email: ${contact.email || "Email"}`, 20, 70);
    doc.text(`Address: ${contact.address || "Address"}`, 20, 80);
    doc.text(`Phone: ${contact.phone || "Phone Number"}`, 20, 90);

    doc.setFontSize(16);
    doc.text("Work History", 20, 110);
    if (experience.length > 0) {
      experience.forEach((exp, index) => {
        const yPosition = 120 + index * 20;
        doc.setFontSize(12);
        doc.text(`${exp.position || "Position"} at ${exp.company || "Company"}`, 20, yPosition);
        doc.text(exp.description || "Job description", 20, yPosition + 10);
      });
    } else {
      doc.text("No experience added yet.", 20, 120);
    }

    doc.setFontSize(16);
    doc.text("Skills", 20, 160);
    if (skills.length > 0) {
      skills.forEach((skill, index) => {
        const yPosition = 170 + index * 10;
        doc.setFontSize(12);
        doc.text(skill || "Skill", 20, yPosition);
      });
    } else {
      doc.text("No skills added yet.", 20, 170);
    }

    doc.setFontSize(16);
    doc.text("Education", 20, 200);
    if (education.length > 0) {
      education.forEach((edu, index) => {
        const yPosition = 210 + index * 20;
        doc.setFontSize(12);
        doc.text(`${edu.degree || "Degree"} at ${edu.institution || "Institution"}`, 20, yPosition);
        doc.text(`Year: ${edu.year || "Year"}`, 20, yPosition + 10);
      });
    } else {
      doc.text("No education details added yet.", 20, 210);
    }

    doc.save("CV.pdf"); // Download the PDF
  };

  return (
    <div className="w-full bg-white shadow-lg p-6 rounded-lg">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {name || "Your Name"}
        </h1>
        <p className="text-gray-600 mt-2">
          {summary || "A brief professional summary..."}
        </p>
      </div>

      <div className="bg-blue-600 text-white p-4 rounded-md mb-4">
        <div>Email: {contact.email || "Email"}</div>
        <div>Address: {contact.address || "Address"}</div>
        <div>Phone: {contact.phone || "Phone Number"}</div>
      </div>

      <h2 className="font-bold text-xl mb-2">Work History</h2>
      {experience.length > 0 ? (
        experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold">{exp.position || "Position"}</h3>
            <p>{exp.company || "Company"}</p>
            <p>{exp.description || "Job description"}</p>
          </div>
        ))
      ) : (
        <p>No experience added yet.</p>
      )}

      <h2 className="font-bold text-xl mb-2">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <li key={index}>{skill || "Skill"}</li>
          ))
        ) : (
          <p>No skills added yet.</p>
        )}
      </ul>

      <h2 className="font-bold text-xl mb-2">Education</h2>
      {education.length > 0 ? (
        education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3>{edu.degree || "Degree"}</h3>
            <p>{edu.institution || "Institution"}</p>
            <p>{edu.year || "Year"}</p>
          </div>
        ))
      ) : (
        <p>No education details added yet.</p>
      )}

      <button onClick={handleDownload} className="bg-green-500 text-white px-4 py-2 rounded">
        Download CV as PDF
      </button>
    </div>
  );
};

export default CVTemplate;
