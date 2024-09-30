import React, { useState } from "react";
import Sidebar from "../layouts/Cv-builder/CVsidebar.jsx";
import CVTemplate from "../layouts/Cv-builder/CVTemplate2.jsx";
import CVForm from "../layouts/Cv-builder/CVFormFields.jsx";
import CVTemplateMini from "../layouts/Cv-builder/smallTemplate2.jsx";

const sections = ["contact", "experience", "education", "skill", "preview"];

const CVBuilder = () => {
  const [activeSection, setActiveSection] = useState("contact");

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    contact: { email: "", phone: "", address: "" },
    experience: [{ position: "", company: "", description: "" }],
    skills: [""],
    education: [{ degree: "", institution: "", year: "" }],
  });

  // Handle navigation between sections
  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  // Handle form data updates
  const handleInputChange = (e, section, field, index) => {
    const value = e.target.value;
    setFormData((prevData) => {
      if (section === "contact") {
        if (field === "name" || field === "summary") {
          return {
            ...prevData,
            [field]: value, // Handle 'name' and 'summary' directly
          };
        } else {
          return {
            ...prevData,
            contact: { ...prevData.contact, [field]: value }, // Handle nested fields
          };
        }
      } else if (section === "experience") {
        const updatedExperience = [...prevData.experience];
        updatedExperience[index][field] = value;
        return { ...prevData, experience: updatedExperience };
      } else if (section === "education") {
        const updatedEducation = [...prevData.education];
        updatedEducation[index][field] = value;
        return { ...prevData, education: updatedEducation };
      } else if (section === "skill") {
        const updatedSkills = [...prevData.skills];
        updatedSkills[index] = value;
        return { ...prevData, skills: updatedSkills };
      }
      return { ...prevData, [section]: value };
    });
  };
  

  // Add and remove logic
  const handleAddItem = (section) => {
    setFormData((prevData) => {
      if (section === "experience") {
        return {
          ...prevData,
          experience: [...prevData.experience, { position: "", company: "", description: "" }],
        };
      } else if (section === "education") {
        return {
          ...prevData,
          education: [...prevData.education, { degree: "", institution: "", year: "" }],
        };
      } else if (section === "skill") {
        return { ...prevData, skills: [...prevData.skills, ""] };
      }
      return prevData;
    });
  };

  const handleRemoveItem = (section, index) => {
    setFormData((prevData) => {
      if (section === "experience") {
        const updatedExperience = [...prevData.experience];
        updatedExperience.splice(index, 1);
        return { ...prevData, experience: updatedExperience };
      } else if (section === "education") {
        const updatedEducation = [...prevData.education];
        updatedEducation.splice(index, 1);
        return { ...prevData, education: updatedEducation };
      } else if (section === "skill") {
        const updatedSkills = [...prevData.skills];
        updatedSkills.splice(index, 1);
        return { ...prevData, skills: updatedSkills };
      }
      return prevData;
    });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Content Area */}
      <div className="w-[60%] p-8">
        {activeSection !== "preview" ? (
          <CVForm
            activeSection={activeSection}
            formData={formData}
            handleInputChange={handleInputChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        ) : (
          <CVTemplate formData={formData} />
        )}
      </div>
      <div className="w-[40%] bg-customLightSeaGreen">
      <CVTemplateMini formData={formData} />
      </div>
    </div>
  );
};
  
  export default CVBuilder;
