import HomepageNavbar from "../layouts/HomepageNavbar";
import { Link } from "react-router-dom";
import Footer from "../layouts/footer/footer";
import thirdImage from "../assets/images/3rdimagebuildcv.svg";
import secondImage from "../assets/images/2ndimagebuildcv.svg";
import firstImage from "../assets/images/1stimagebuildcv.svg";
import gameIcon from "../assets/images/gameiconspaperarrow.svg";
import gameIcon2 from "../assets/images/gameiconspaperarrow.svg";

function ResumeBuilder() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HomepageNavbar />
      <div className="flex-grow">
        <h2 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold my-10 md:my-16 lg:my-24">
          Create a job-winning CV in minutes
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-16 px-4">
          <div className="flex flex-col items-center">
            <img src={firstImage} alt="buldcv-image" />
            <p className="mt-6 text-lg text-center ml-4">
              Choose your professionally
              <span className="block">designed template</span>
            </p>
          </div>
          <img
            className="hidden md:block w-12 lg:w-14 mx-5"
            src={gameIcon}
            alt="gameicon"
          />

          <div className="flex flex-col items-center">
            <img src={secondImage} alt="buldcv-image" />
            <p className="mt-6 text-lg text-center ml-4">
              Add pre-written examples
              <span className="block">to each section</span>
            </p>
          </div>

          <img
            className="hidden md:block w-12 lg:w-14 mx-5"
            src={gameIcon2}
            alt="gameicon"
          />
          <div className="flex flex-col items-center">
            <img src={thirdImage} alt="buldcv-image" />
            <p className="mt-6 text-lg text-center ml-4">
              Download and start applying
            </p>
          </div>
        </div>
        <div className="flex items-center  flex-col">
          <Link>
            <button className="px-20 md:px-32 lg:px-40 py-5 bg-customDimGreen text-white mt-12 lg:mt-20 mb-20 lg:mb-32 text-lg">
              Let's get started
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResumeBuilder;
