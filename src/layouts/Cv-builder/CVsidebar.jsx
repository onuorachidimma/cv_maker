// import { toPng } from 'html-to-image';
// import { saveAs } from 'file-saver';

// const exportAsPng = () => {
//   toPng(document.getElementById('cv-preview'))
//     .then((dataUrl) => {
//       saveAs(dataUrl, 'cv.png');
//     });
// };

// // Similar functions can be written for DOCX and PDF exports

// // src/components/Sidebar.js
// import React from "react";
// import {
//   ContactIcon,
//   ExperienceIcon,
//   EduIcon,
//   SkillIcon,
//   PreviewIcon,
// } from "../..//assets/images/svgIcons.jsx";

// const sections = [
//   { id: "contact", icon: <ContactIcon size={24} />, label: "Contact" },
//   { id: "experience", icon: <ExperienceIcon size={24} />, label: "Experience" },
//   { id: "education", icon: <EduIcon size={24} />, label: "Education" },
//   { id: "skill", icon: <SkillIcon size={24} />, label: "Skill" },
//   { id: "preview", icon: <PreviewIcon size={24} />, label: "Preview" },
// ];

// const Sidebar = ({ activeSection, setActiveSection }) => {
//   return (
//     <div className="w-28 bg-customDarkGreen flex flex-col items-center py-8">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           onClick={() => setActiveSection(section.id)}
//           className={`flex flex-col items-center justify-center w-full py-4 cursor-pointer ${
//             activeSection === section.id ? "text-customYellowB" : "text-white"
//           } hover:bg-green-900`}
//         >
//           {section.icon}
//           <span className="mt-2 text-sm">{section.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  ContactIcon,
  ExperienceIcon,
  EduIcon,
  SkillIcon,
  PreviewIcon,
} from "../../assets/images/svgIcons.jsx"; // Adjust the path as necessary

const sections = [
  { id: "contact", icon: <ContactIcon size={24} />, label: "Contact" },
  { id: "experience", icon: <ExperienceIcon size={24} />, label: "Experience" },
  { id: "education", icon: <EduIcon size={24} />, label: "Education" },
  { id: "skill", icon: <SkillIcon size={24} />, label: "Skill" },
  { id: "preview", icon: <PreviewIcon size={24} />, label: "Preview" },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="w-28 bg-customDarkGreen flex flex-col items-center py-8">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`flex flex-col items-center justify-center w-full py-4 cursor-pointer ${
            activeSection === section.id ? "text-customYellowB" : "text-white"
          } hover:bg-green-900`}
        >
          {section.icon}
          <span className="mt-2 text-sm">{section.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
