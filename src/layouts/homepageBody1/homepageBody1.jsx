import SectionHeading from "./sectionHeading"
import SignupFreeButton from "../buttons/signupFreeBtn"
import coverLetterSample1 from "../../assets/images/coverLetterSample1.svg"
const HomepageBody1 = () => {
    return(
        <div className="mb-32  ">
            <div className="flex flex-wrap justify-between items-center mb-20 w-10/12 mx-auto lg:w-full lg:pl-36 mt-5 md:mb-32">
                <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 md:pr-5 lg:pr-0">
                    <SectionHeading heading="Transform Your Career with a Stunning Cover Letter" headingText="Step into a world where your professional journey is beautifully showcased and your future possibilities are endless. Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality. "/>
                    <div className="pt-5 mb-10">
                        <SignupFreeButton />
                    </div>
                </div>

                <div className="w-full md:w-6/12 flex justify-left items-center relative">
                    <div className="hidden md:block bg-customDarkGreen h-96 absolute right-0 left-20">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, aperiam. */}
                    </div>
                    <img src={coverLetterSample1} alt="" className="z-10 w-full h-696px lg:w-9/12"/>
                </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-between w-9/12 md:w-10/12 lg:w-7/12 mx-auto">
                <div className="w-full md:w-6/12 lg:w-6/12 md:pr-2 lg:pr-0 ">
                    <SectionHeading heading="Features Tailored for Your Success" headingText="Step into a world where your professional journey is beautifully showcased and your future possibilities are endless. Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality.  "/>
                </div>

                <div className=" flex md:items-center   leading-156px w-full md:w-4/12 lg:w-6/12">
                    <h3 className="font-squarePeg text-8xl  lg:text-9xl">Countless Possibilities</h3>
                </div>

            </div>
        </div>
    )
}
export default HomepageBody1