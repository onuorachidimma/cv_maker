import SectionHeading from "./sectionHeading"
import SignupFreeButton from "../buttons/signupFreeBtn"
const HomepageBody1 = () => {
    return(
        <div className="mb-32  ">
            <div className="flex flex-wrap justify-between mb-20 w-10/12 mx-auto lg:w-full lg:pl-20 mt-5 md:mb-32">
                <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 md:pr-5 lg:pr-0">
                    <SectionHeading heading="Transform Your Career Story into a Visual Masterpiece" headingText="Step into a world where your professional journey is beautifully showcased and your future possibilities are endless. Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality. "/>
                    <div className="pt-5 mb-10">
                        <SignupFreeButton />
                    </div>
                </div>

                <div className="bg-customDarkGreen w-full sm:w-full md:w-7/12 lg:w-6/12 rounded-tl-45px p-5">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit ex perferendis aspernatur labore ipsam maiores aperiam, laborum beatae, autem eius commodi reiciendis praesentium sunt quia a error? Atque obcaecati harum exercitationem quibusdam! Molestias temporibus reprehenderit sit tenetur doloribus placeat distinctio debitis tempora facere repellendus natus blanditiis atque quod, inventore optio, in architecto! Deleniti neque dolor dolorum enim, illum amet modi vitae quasi, cupiditate deserunt ex maiores harum minima similique vel voluptatem quaerat asperiores officiis tempore odit fuga molestiae, impedit perspiciatis error? Nostrum deleniti sunt, aperiam tempora quas saepe impedit a suscipit harum ipsa consequuntur quibusdam officiis eum dolorem! Perferendis!</p>
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