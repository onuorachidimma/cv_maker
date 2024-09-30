// import React, { useState } from 'react';

// // Individual Section Component
// const Section = ({ children, onNext, onBack, isLastSection }) => (
//   <div>
//     {children}
//     <div className="mt-4 flex justify-between">
//       <button onClick={onBack} className="bg-gray-500 text-white p-2">
//         Back
//       </button>
//       <button onClick={onNext} className="bg-blue-500 text-white p-2">
//         {isLastSection ? 'Preview' : 'Next'}
//       </button>
//     </div>
//   </div>
// );

// const CvPreview = () => {
//   const [details, setDetails] = useState({
//     name: 'John Doe',
//     title: 'Frontend Developer',
//     profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     workExperience: [
//       {
//         date: 'Month Year',
//         title: 'Job Title',
//         company: 'Company Name',
//         responsibilities: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.`,
//         techStack: 'HTML, CSS, JavaScript',
//       },
//     ],
//     projects: [
//       {
//         date: 'Month Year',
//         title: 'Project Title',
//         role: 'Role in Project',
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,
//         techStack: 'React.js, CSS, JavaScript',
//       },
//     ],
//     technicalSkills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git'],
//     softSkills: ['Teamwork', 'Communication', 'Problem Solving'],
//     certifications: [
//       {
//         name: 'Certification Name',
//         date: 'Month Year',
//         description: 'Brief description of certification.',
//       },
//     ],
//     languages: ['English (Fluent)', 'Language (Level)'],
//   });

//   const [activeSection, setActiveSection] = useState('profile');

//   const sections = [
//     'profile',
//     'workExperience',
//     'projects',
//     'technicalSkills',
//     'softSkills',
//     'certifications',
//     'languages',
//     'preview', // New Preview Section
//   ];

//   const handleNext = () => {
//     const currentIndex = sections.indexOf(activeSection);
//     if (currentIndex < sections.length - 1) {
//       setActiveSection(sections[currentIndex + 1]);
//     }
//   };

//   const handleBack = () => {
//     const currentIndex = sections.indexOf(activeSection);
//     if (currentIndex > 0) {
//       setActiveSection(sections[currentIndex - 1]);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleArrayChange = (e, index, arrayName) => {
//     const { value } = e.target;
//     const newArray = [...details[arrayName]];
//     newArray[index] = value; // Updating the array directly with the new value
//     setDetails((prevDetails) => ({
//       ...prevDetails,
//       [arrayName]: newArray,
//     }));
//   };

//   const addItem = (arrayName, newItem) => {
//     setDetails((prevDetails) => ({
//       ...prevDetails,
//       [arrayName]: [...prevDetails[arrayName], newItem],
//     }));
//   };

//   const removeItem = (arrayName, index) => {
//     const newArray = details[arrayName].filter((_, i) => i !== index);
//     setDetails({ ...details, [arrayName]: newArray });
//   };

//   return (
//     <div className="flex h-screen justify-between">
//       {/* Navigation Section */}
//       <div className="w-[10%] bg-customDarkGreen text-white text-left flex flex-col p-4">
//         {sections.slice(0, -1).map((section, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveSection(section)}
//             className={`mb-4 ${activeSection === section ? 'font-bold' : ''}`}
//           >
//             {section}
//           </button>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-[60%] p-4">
//         <h2 className="text-xl font-bold mb-4">Edit Your CV</h2>

//         {activeSection === 'profile' && (
//           <Section onNext={handleNext} onBack={handleBack}>
//             <div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={details.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="border p-2 w-full"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={details.title}
//                   onChange={handleChange}
//                   placeholder="Enter your title"
//                   className="border p-2 w-full"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">Profile</label>
//                 <textarea
//                   name="profile"
//                   value={details.profile}
//                   onChange={handleChange}
//                   placeholder="Enter your profile summary"
//                   className="border p-2 w-full"
//                 />
//               </div>
//             </div>
//           </Section>
//         )}

//         {activeSection === 'workExperience' && (
//           <Section onNext={handleNext} onBack={handleBack}>
//             <label className="block text-sm font-medium mb-2">Work Experience</label>
//             {details.workExperience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   name="date"
//                   value={exp.date}
//                   onChange={(e) => handleArrayChange(e, index, 'workExperience')}
//                   placeholder="Enter the date"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <input
//                   type="text"
//                   name="title"
//                   value={exp.title}
//                   onChange={(e) => handleArrayChange(e, index, 'workExperience')}
//                   placeholder="Enter job title"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <input
//                   type="text"
//                   name="company"
//                   value={exp.company}
//                   onChange={(e) => handleArrayChange(e, index, 'workExperience')}
//                   placeholder="Enter company name"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <textarea
//                   name="responsibilities"
//                   value={exp.responsibilities}
//                   onChange={(e) => handleArrayChange(e, index, 'workExperience')}
//                   placeholder="Enter responsibilities"
//                   className="border p-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="techStack"
//                   value={exp.techStack}
//                   onChange={(e) => handleArrayChange(e, index, 'workExperience')}
//                   placeholder="Enter tech stack"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <button
//                   onClick={() => removeItem('workExperience', index)}
//                   className="bg-red-500 text-white p-2 mt-2"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={() =>
//                 addItem('workExperience', {
//                   date: '',
//                   title: '',
//                   company: '',
//                   responsibilities: '',
//                   techStack: '',
//                 })
//               }
//               className="bg-blue-500 text-white p-2 mt-2"
//             >
//               Add Work Experience
//             </button>
//           </Section>
//         )}

//         {activeSection === 'projects' && (
//           <Section onNext={handleNext} onBack={handleBack}>
//             <label className="block text-sm font-medium mb-2">Projects</label>
//             {details.projects.map((project, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   name="date"
//                   value={project.date}
//                   onChange={(e) => handleArrayChange(e, index, 'projects')}
//                   placeholder="Enter the date"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <input
//                   type="text"
//                   name="title"
//                   value={project.title}
//                   onChange={(e) => handleArrayChange(e, index, 'projects')}
//                   placeholder="Enter project title"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <input
//                   type="text"
//                   name="role"
//                   value={project.role}
//                   onChange={(e) => handleArrayChange(e, index, 'projects')}
//                   placeholder="Enter role in project"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <textarea
//                   name="description"
//                   value={project.description}
//                   onChange={(e) => handleArrayChange(e, index, 'projects')}
//                   placeholder="Enter project description"
//                   className="border p-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="techStack"
//                   value={project.techStack}
//                   onChange={(e) => handleArrayChange(e, index, 'projects')}
//                   placeholder="Enter tech stack"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <button
//                   onClick={() => removeItem('projects', index)}
//                   className="bg-red-500 text-white p-2 mt-2"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={() =>
//                 addItem('projects', {
//                   date: '',
//                   title: '',
//                   role: '',
//                   description: '',
//                   techStack: '',
//                 })
//               }
//               className="bg-blue-500 text-white p-2 mt-2"
//             >
//               Add Project
//             </button>
//           </Section>
//         )}

// {activeSection === 'technicalSkills' && (
//   <Section onNext={handleNext} onBack={handleBack}>
//     <label className="block text-sm font-medium mb-2">Technical Skills</label>
//     {details.technicalSkills.map((skill, index) => (
//       <div key={index} className="mb-4 flex">
//         <input
//           type="text"
//           value={skill}
//           onChange={(e) => handleArrayChange(e, index, 'technicalSkills')}
//           placeholder="Enter skill"
//           className="border p-2 w-full"
//         />
//         <button
//           onClick={() => removeItem('technicalSkills', index)}
//           className="bg-red-500 text-white p-2 ml-2"
//         >
//           Remove
//         </button>
//       </div>
//     ))}
//     <button
//       onClick={() => addItem('technicalSkills', '')}
//       className="bg-blue-500 text-white p-2 mt-2"
//     >
//       Add Skill
//     </button>
//   </Section>
// )}

// {activeSection === 'softSkills' && (
//   <Section onNext={handleNext} onBack={handleBack}>
//     <label className="block text-sm font-medium mb-2">Soft Skills</label>
//     {details.softSkills.map((skill, index) => (
//       <div key={index} className="mb-4 flex">
//         <input
//           type="text"
//           value={skill}
//           onChange={(e) => handleArrayChange(e, index, 'softSkills')}
//           placeholder="Enter skill"
//           className="border p-2 w-full"
//         />
//         <button
//           onClick={() => removeItem('softSkills', index)}
//           className="bg-red-500 text-white p-2 ml-2"
//         >
//           Remove
//         </button>
//       </div>
//     ))}
//     <button
//       onClick={() => addItem('softSkills', '')}
//       className="bg-blue-500 text-white p-2 mt-2"
//     >
//       Add Skill
//     </button>
//   </Section>
// )}

//         {activeSection === 'certifications' && (
//           <Section onNext={handleNext} onBack={handleBack}>
//             <label className="block text-sm font-medium mb-2">Certifications</label>
//             {details.certifications.map((cert, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={cert.name}
//                   onChange={(e) => handleArrayChange(e, index, 'certifications')}
//                   placeholder="Enter certification name"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <input
//                   type="text"
//                   name="date"
//                   value={cert.date}
//                   onChange={(e) => handleArrayChange(e, index, 'certifications')}
//                   placeholder="Enter certification date"
//                   className="border p-2 w-full mb-2"
//                 />
//                 <textarea
//                   name="description"
//                   value={cert.description}
//                   onChange={(e) => handleArrayChange(e, index, 'certifications')}
//                   placeholder="Enter brief description"
//                   className="border p-2 w-full"
//                 />
//                 <button
//                   onClick={() => removeItem('certifications', index)}
//                   className="bg-red-500 text-white p-2 mt-2"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={() =>
//                 addItem('certifications', {
//                   name: '',
//                   date: '',
//                   description: '',
//                 })
//               }
//               className="bg-blue-500 text-white p-2 mt-2"
//             >
//               Add Certification
//             </button>
//           </Section>
//         )}

// {activeSection === 'languages' && (
//   <Section onNext={handleNext} onBack={handleBack}>
//     <label className="block text-sm font-medium mb-2">Languages</label>
//     {details.languages.map((language, index) => (
//       <div key={index} className="mb-4 flex">
//         <input
//           type="text"
//           value={language}
//           onChange={(e) => handleArrayChange(e, index, 'languages')}
//           placeholder="Enter language"
//           className="border p-2 w-full"
//         />
//         <button
//           onClick={() => removeItem('languages', index)}
//           className="bg-red-500 text-white p-2 ml-2"
//         >
//           Remove
//         </button>
//       </div>
//     ))}
//     <button
//       onClick={() => addItem('languages', '')}
//       className="bg-blue-500 text-white p-2 mt-2"
//     >
//       Add Language
//     </button>
//   </Section>
// )}

//         {activeSection === 'preview' && (
//           <Section onBack={handleBack}>
//             <h2 className="text-xl font-bold mb-4">Preview</h2>
//             <div className="bg-white p-4 rounded-lg shadow-lg">
//               <h1 className="text-2xl font-bold">{details.name}</h1>
//               <p className="text-sm">{details.title}</p>
//               <p className="mt-2">{details.profile}</p>

//               <h3 className="text-lg font-semibold mt-4">Work Experience</h3>
//               {details.workExperience.map((exp, index) => (
//                 <div key={index}>
//                   <p className="font-semibold">{exp.title}</p>
//                   <p className="text-sm">{exp.company} - {exp.date}</p>
//                   <p>{exp.responsibilities}</p>
//                   <p className="text-sm italic">Tech Stack: {exp.techStack}</p>
//                 </div>
//               ))}

//               <h3 className="text-lg font-semibold mt-4">Projects</h3>
//               {details.projects.map((project, index) => (
//                 <div key={index}>
//                   <p className="font-semibold">{project.title}</p>
//                   <p className="text-sm">{project.date}</p>
//                   <p>{project.description}</p>
//                   <p className="text-sm italic">Tech Stack: {project.techStack}</p>
//                 </div>
//               ))}

//               <h3 className="text-lg font-semibold mt-4">Technical Skills</h3>
//               <ul>
//                 {details.technicalSkills.map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>

//               <h3 className="text-lg font-semibold mt-4">Soft Skills</h3>
//               <ul>
//                 {details.softSkills.map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>

//               <h3 className="text-lg font-semibold mt-4">Certifications</h3>
//               {details.certifications.map((cert, index) => (
//                 <div key={index}>
//                   <p className="font-semibold">{cert.name}</p>
//                   <p className="text-sm">{cert.date}</p>
//                   <p>{cert.description}</p>
//                 </div>
//               ))}

//               <h3 className="text-lg font-semibold mt-4">Languages</h3>
//               <ul>
//                 {details.languages.map((language, index) => (
//                   <li key={index}>{language}</li>
//                 ))}
//               </ul>
//             </div>
//           </Section>
//         )}
//       </div>

//       {/* Preview Section */}

//       <div className="w-full md:w-[30%] bg-customLightSeaGreen ">
//         <h2 className="text-[8px] font-bold mb-4">Preview</h2>

//         <div className="border p-4 bg-white w-[70%] mx-auto mt-16">
//           <h1 className="text-base font-bold">{details.name}</h1>
//           <h2 className="text-[8px]">{details.title}</h2>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Profile</h3>
//             <p className='text-[8px]'>{details.profile}</p>
//           </div>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Work Experience</h3>
//             {details.workExperience.map((exp, index) => (
//               <div key={index} className="mt-2">
//                 <p className="font-bold text-[8px]">{exp.date}</p>
//                 <p className='text-[8px]'>{exp.title} at {exp.company}</p>
//                 <p className='text-[8px]'>{exp.responsibilities}</p>
//                 <p className='text-[8px]'>Tech Stack: {exp.techStack}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Projects</h3>
//             {details.projects.map((project, index) => (
//               <div key={index} className="mt-2">
//                 <p className="font-bold text-[8px]">{project.date}</p>
//                 <p className='text-[8px]'>{project.title} - {project.role}</p>
//                 <p className='text-[8px]'>{project.description}</p>
//                 <p className='text-[8px]'>Tech Stack: {project.techStack}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Technical Skills</h3>
//             <ul>
//               {details.technicalSkills.map((skill, index) => (
//                 <li className='text-[8px]' key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Soft Skills</h3>
//             <ul>
//               {details.softSkills.map((skill, index) => (
//                 <li  className='text-[8px]' key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Certifications</h3>
//             {details.certifications.map((cert, index) => (
//               <div key={index} className="mt-2">
//                 <p className="font-bold text-[8px]">{cert.name} - {cert.date}</p>
//                 <p  className='text-[8px]'>{cert.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4">
//             <h3 className="text-[8px] font-bold">Languages</h3>
//             <ul>
//               {details.languages.map((lang, index) => (
//                 <li  className='text-[8px]' key={index}>{lang}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CvPreview;

// src/components/Content.js
import React from "react";
import CvSectionHeader from "./cvSectionHeader";

const TemplateContent = ({ activeSection, handleChange, formData, setActiveSection }) => {
  const sectionsOrder = ["contact", "experience", "education", "skill", "preview"];

  const goToNextSection = () => {
    const currentIndex = sectionsOrder.indexOf(activeSection);
    if (currentIndex < sectionsOrder.length - 1) {
      setActiveSection(sectionsOrder[currentIndex + 1]);
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = sectionsOrder.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sectionsOrder[currentIndex - 1]);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "contact":
        return (
          <div>
            <CvSectionHeader
              letter1="Contact"
              letter2="information"
              sectionInstruction="Include your full name and at least email or phone number"
            />
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
            </form>
          </div>
        );
      case "experience":
        return (
          <div>
            <CvSectionHeader
              letter1="Add your"
              letter2="experience"
              sectionInstruction="Begin with your latest job, followed by previous positions."
            />
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
            </form>
          </div>
        );
      case "education":
        return (
          <div>
            <CvSectionHeader
              letter1="Add your"
              letter2="education"
              sectionInstruction="Include details like degree, school name, and year of graduation."
            />
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Year of Graduation</label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
            </form>
          </div>
        );
      case "skill":
        return (
          <div>
            <CvSectionHeader
              letter1="Add your"
              letter2="skills"
              sectionInstruction="List skills that are relevant to the job you're applying for."
            />
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded w-full"
                  placeholder="Separate skills with commas"
                />
              </div>
            </form>
          </div>
        );
      case "preview":
        return (
          <div>
            <CvSectionHeader
              letter1="Preview your"
              letter2="CV"
            />
            <h2>Preview your CV on the right!</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 p-8">
      {renderContent()}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={goToPreviousSection}
          disabled={sectionsOrder.indexOf(activeSection) === 0}
          className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={goToNextSection}
          disabled={sectionsOrder.indexOf(activeSection) === sectionsOrder.length - 1}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TemplateContent;

