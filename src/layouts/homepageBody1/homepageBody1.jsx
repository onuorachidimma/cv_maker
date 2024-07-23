import SectionHeading from "./sectionHeading";
import SignupFreeButton from "../buttons/signupFreeBtn";
import coverLetterSample1 from "../../assets/images/coverLetterSample1.svg";
import manWithFiles from "../../assets/images/manWithPapers.svg";
import TestimonialCard from "../cards/testimonialCard.jsx";
import { Link } from "react-router-dom";
const HomepageBody1 = () => {
  return (
    <div className="mb-32  ">
      {/* ############## Homepage Cover Letter section ####################### */}
      <div className="flex flex-wrap justify-between items-center  md:mb-8 lg:mb-16 w-10/12 mx-auto lg:w-full lg:pl-36  md:mt-5 ">
        <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 md:pr-5 lg:pr-0">
          <Link
            to="#"
            className="block text-center md:text-left text-customDeepGreen underline text-2xl mb-4"
          >
            Build Cover Letter
          </Link>
          <SectionHeading
            heading="Transform Your Career with a Stunning Cover Letter"
            headingText="Step into a world where your professional journey is beautifully showcased and your future possibilities are endless. Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality. "
          />
          <div className="pt-5 mb-4 md:mb-10">
            <SignupFreeButton />
          </div>
        </div>

        <div className="w-full md:w-6/12 flex justify-left items-center relative">
          <div className="hidden md:block bg-customDarkGreen h-96 absolute right-0 left-20"></div>
          <img
            src={coverLetterSample1}
            alt=""
            className="z-10 w-full h-696px lg:w-9/12"
          />
        </div>
      </div>

      {/* ############## Homepage Testimonial section ####################### */}

      <div>
        <div className="text-center">
          <h3 className="font-bold text-4xl lg:text-5xl mb-4 ">Testimonials</h3>
          <p className="w-5/12 mx-auto text-base lg:text-2xl pb-12">
            Join thousands of professionals to enhance your resume, track your
            job search, and land a job you love.
          </p>
        </div>

        <div>
          <TestimonialCard />
        </div>
      </div>

      <div className="bg-customBrightYellow flex flex-wrap gap-8 md:gap-0 justify-center items-center px-14  lg:px-36 py-24 my-24">
        <div className="w-full md:w-6/12 lg:w-5/12">
          <img src={manWithFiles} alt="" className="w-full" />
        </div>

        <div className="bg-customYellowB flex  items-center px-10  md:px-8 lg:px-36 py-12 md:py-14 w-full md:w-6/12 w-8/12 h-44 lg:h-40">
          <h3 className="text-4xl  font-bold ">
            Features Tailored for Your Success
          </h3>
        </div>
      </div>

      <div className="hidden md:flex flex-wrap justify-center lg:justify-between w-9/12 md:w-10/12 lg:w-6/12 mx-auto">
        <div className="w-full md:w-6/12 lg:w-5/12 md:pr-2 lg:pr-0">
          <SectionHeading
            heading="Features Tailored for Your Success"
            headingText="Step into a world where your professional journey is beautifully showcased and your future possibilities are endless. Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality.  "
          />
        </div>

        <div className=" flex  md:items-center lg:items-right leading-156px w-full md:w-4/12 lg:w-6/12">
          <h3 className="font-squarePeg text-8xl lg:text-150px">
            Countless Possibilities
          </h3>
        </div>
      </div>
    </div>
  );
};
export default HomepageBody1;
