import heroImage from "../assets/images/hero-image.svg"

function Hero() {
  return (
    <>
      <div className="mx-4 mt-9 lg:m-28">
        <h1 className="  text-center text-2xl lg:text-6xl font-bold m-6">Craft Your Future with a CV That Captivates and Inspires.</h1>
        <h4 className="  text-center text-base lg:text-xl mx-4 lg:m-10 ">Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality.</h4>
        <div className="flex justify-center mt-5 mx-12 mb-10 gap-1"> 
          <button className="bg-customGreen p-2 lg:py-2.5 lg:px-5 rounded-35px text-sm font-semibold lg:text-xl">Create your CV</button>
          <button className=" border border-customGreen p-2 lg:py-2.5 lg:px-5 rounded-35px text-sm font-semibold lg:text-xl">Upgrade your CV</button>
        </div>
        <div className=" container flex justify-center flex-row gap-2">
          <div className="container bg-customGreen w-5 h-auto rounded-tl-3xl rounded-br-3xl"></div>
          <img src={heroImage} alt="custom CV image" />
        </div>
      </div>
    </>
  )
}

export default Hero