import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomepageNavbar from "../layouts/HomepageNavbar";
import Footer from "../layouts/footer/footer";
import template1 from "../assets/images/template1.svg";
import template2 from "../assets/images/template2.svg";
import template3 from "../assets/images/template3.svg";
import template4 from "../assets/images/template4.svg";
import template5 from "../assets/images/template5.svg";

function TemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (templateId) => {
    setSelectedTemplate((prevSelectedTemplate) =>
      prevSelectedTemplate === templateId ? null : templateId
    );
    console.log(`Selected Template: ${templateId}`);
  };

  const handleClickOutside = (event) => {
    if (selectedTemplate && !event.target.closest(".template-image")) {
      setSelectedTemplate(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedTemplate]);

  const getImageClasses = (templateId) => {
    return `template-image cursor-pointer rounded transition-shadow duration-300 opacity-85 ${
      selectedTemplate === templateId
        ? "shadow-md shadow-blue-500 opacity-100 z-10 bg-white transform scale-150 translate-y-16 w-[195px] h-[280px]"
        : "shadow-sm hover:shadow-lg"
    }`;
  };

  return (
    <div className="min-h-screen">
      <HomepageNavbar />

      <div className="flex flex-col ">
        <div className="flex flex-col flex-grow px-4 sm:px-8 lg:px-32 xl:px-64 mb-32">
          <div className="text-center mb-4">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 mt-10">
              Choose a template for your CV
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">
              You can always change your mind and try a different template later
            </p>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className={getImageClasses("template1")}>
                <img
                  id="template1"
                  src={template1}
                  alt="Template 1"
                  onClick={() => handleTemplateClick("template1")}
                />
              </div>
              <div className={getImageClasses("template2")}>
                <img
                  id="template2"
                  src={template2}
                  alt="Template 2"
                  onClick={() => handleTemplateClick("template2")}
                />
              </div>
              <div className={getImageClasses("template3")}>
                <img
                  id="template3"
                  src={template3}
                  alt="Template 3"
                  onClick={() => handleTemplateClick("template3")}
                />
              </div>
              <div className={getImageClasses("template4")}>
                <img
                  id="template4"
                  src={template4}
                  alt="Template 4"
                  onClick={() => handleTemplateClick("template4")}
                />
              </div>
              <div className={getImageClasses("template5")}>
                <img
                  id="template5"
                  src={template5}
                  alt="Template 5"
                  onClick={() => handleTemplateClick("template5")}
                />
              </div>
            </div>

            <Link
              to="/templates"
              className="underline underline-offset-2 cursor-pointer mt-7 text-right pb-9 text-sm sm:text-base"
            >
              See all templates
            </Link>
          </div>

          <div className="flex justify-end items-center mt-24 gap-4 sm:gap-7 ">
            <p className="text-customLighterGreen text-base sm:text-lg">
              Skip for now
            </p>
            <button className="text-white bg-customDeepGreen font-light py-3 px-6 text-sm sm:text-lg">
              Choose the template
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TemplateSelector;
