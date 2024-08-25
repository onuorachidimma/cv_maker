// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../layouts/footer/footer";
// import template1 from "../assets/images/template1.svg";
// import template2 from "../assets/images/template2.svg";
// import template3 from "../assets/images/template3.svg";
// import template4 from "../assets/images/template4.svg";
// import template5 from "../assets/images/template5.svg";

// function TemplateSelector() {
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   const handleTemplateClick = (templateId) => {
//     setSelectedTemplate(templateId);
//     console.log(`Selected Template: ${templateId}`);
//   };

//   const getImageClasses = (templateId) => {
//     return `cursor-pointer p-2 rounded transition-shadow duration-300 ${
//       selectedTemplate === templateId
//         ? "shadow-2xl border-4 border-blue-500"
//         : "shadow-sm hover:shadow-lg"
//     }`;
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-col flex-grow px-4 sm:px-8 lg:px-32 xl:px-64">
//         <div className="text-center mb-4">
//           <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 mt-9">
//             Choose a template for your CV
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">
//             You can always change your mind and try a different template later
//           </p>
//         </div>
//         <div className="flex flex-col">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
//             <img
//               id="template1"
//               className={getImageClasses("template1")}
//               src={template1}
//               alt="Template 1"
//               onClick={() => handleTemplateClick("template1")}
//             />
//             <img
//               id="template2"
//               className={getImageClasses("template2")}
//               src={template2}
//               alt="Template 2"
//               onClick={() => handleTemplateClick("template2")}
//             />
//             <img
//               id="template3"
//               className={getImageClasses("template3")}
//               src={template3}
//               alt="Template 3"
//               onClick={() => handleTemplateClick("template3")}
//             />
//             <img
//               id="template4"
//               className={getImageClasses("template4")}
//               src={template4}
//               alt="Template 4"
//               onClick={() => handleTemplateClick("template4")}
//             />
//             <img
//               id="template5"
//               className={getImageClasses("template5")}
//               src={template5}
//               alt="Template 5"
//               onClick={() => handleTemplateClick("template5")}
//             />
//           </div>

//           <Link
//             to="/templates"
//             className="underline underline-offset-2 cursor-pointer text-right pb-9 text-sm sm:text-base"
//           >
//             See all templates
//           </Link>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-customLighterGreen text-base sm:text-lg">
//             Skip for now
//           </p>
//           <button className="text-white bg-customDeepGreen font-light py-3 px-6 text-sm sm:text-lg">
//             Choose the template
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default TemplateSelector;
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/footer/footer";
import template1 from "../assets/images/template1.svg";
import template2 from "../assets/images/template2.svg";
import template3 from "../assets/images/template3.svg";
import template4 from "../assets/images/template4.svg";
import template5 from "../assets/images/template5.svg";

function TemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleTemplateClick = (templateId) => {
    setSelectedTemplate(templateId);
    setIsEnlarged(false); // Reset enlargement when a new template is selected
    console.log(`Selected Template: ${templateId}`);
  };

  const handleEnlargeClick = () => {
    setIsEnlarged(!isEnlarged); // Toggle enlargement
  };

  const getImageClasses = (templateId) => {
    return `cursor-pointer p-2 rounded transition-shadow duration-300 ${
      selectedTemplate === templateId
        ? "shadow-2xl border-4 border-blue-500"
        : "shadow-sm hover:shadow-lg"
    } ${
      isEnlarged && selectedTemplate === templateId ? "transform scale-125" : ""
    }`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow px-4 sm:px-8 lg:px-32 xl:px-64">
        <div className="text-center mb-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 mt-9">
            Choose a template for your CV
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">
            You can always change your mind and try a different template later
          </p>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
            <img
              id="template1"
              className={getImageClasses("template1")}
              src={template1}
              alt="Template 1"
              onClick={() => handleTemplateClick("template1")}
            />
            <img
              id="template2"
              className={getImageClasses("template2")}
              src={template2}
              alt="Template 2"
              onClick={() => handleTemplateClick("template2")}
            />
            <img
              id="template3"
              className={getImageClasses("template3")}
              src={template3}
              alt="Template 3"
              onClick={() => handleTemplateClick("template3")}
            />
            <img
              id="template4"
              className={getImageClasses("template4")}
              src={template4}
              alt="Template 4"
              onClick={() => handleTemplateClick("template4")}
            />
            <img
              id="template5"
              className={getImageClasses("template5")}
              src={template5}
              alt="Template 5"
              onClick={() => handleTemplateClick("template5")}
            />
          </div>

          {selectedTemplate && (
            <div className="flex justify-center mt-2">
              <button
                onClick={handleEnlargeClick}
                className="bg-customDeepGreen text-white py-1 px-4 rounded"
              >
                {isEnlarged ? "Shrink" : "Enlarge"}
              </button>
            </div>
          )}

          <Link
            to="/templates"
            className="underline underline-offset-2 cursor-pointer text-right pb-9 text-sm sm:text-base"
          >
            See all templates
          </Link>
        </div>

        <div className="flex justify-end items-center mt-4 gap-4 sm:gap-7 mb-24">
          <p className="text-customLighterGreen text-base sm:text-lg">
            Skip for now
          </p>
          <button className="text-white bg-customDeepGreen font-light py-3 px-6 text-sm sm:text-lg">
            Choose the template
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TemplateSelector;
