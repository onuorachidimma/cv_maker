import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/footer/footer";
import template1 from "../assets/images/template1.svg";
import template2 from "../assets/images/template2.svg";
import template3 from "../assets/images/template3.svg";
import template4 from "../assets/images/template4.svg";
import template5 from "../assets/images/template5.svg";

function TemplateSelector() {
  // Step 1: State to keep track of the selected template
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Step 2: Function to handle image click
  const handleTemplateClick = (templateId) => {
    setSelectedTemplate(templateId);
    // Here you can add logic to change the CV template
    console.log(`Selected Template: ${templateId}`);
  };

  // Step 3: Conditionally apply styles
  const getImageClasses = (templateId) => {
    return `cursor-pointer p-2 rounded transition-shadow duration-300 ${
      selectedTemplate === templateId
        ? "shadow-2xl border-4 border-blue-500"
        : "shadow-sm hover:shadow-lg"
    }`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col  flex-grow px-64">
        <div className="text-center mb-4">
          <h2 className="font-bold text-6xl mb-4 mt-9">
            Choose a template for your CV
          </h2>
          <p className="text-2xl font-light mb-2">
            You can always change your mind and try a different template later
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
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

          <Link
            to="/templates"
            className=" underline underline-offset-2 cursor-pointer text-right pb-9"
          >
            See all templates
          </Link>
        </div>

        <div className="flex justify-end gap-7">
          <p className="text-customLighterGreen py-2 mt-7">Skip for now</p>
          <button className="text-white bg-customDeepGreen font-light mb-24 py-3 px-8 mt-5 text-lg">
            Choose the template
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TemplateSelector;
