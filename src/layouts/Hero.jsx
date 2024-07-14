

function Hero() {
  return (
    <>
      <div className="w-auto m-28">
        <h1 className="text-center text-6xl font-bold m-6">Craft Your Future with a CV That Captivates and Inspires.</h1>
        <h4 className="text-center text-xl m-10 mx-36 ">Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality.</h4>
        <div className="flex m-10 justify-center gap-6"> 
          <button className="bg-customGreen py-2.5 px-5 rounded-3xl text-base">Create your CV</button>
          <button className=" border border-customGreen py-2.5 px-5 rounded-3xl text-base">Upgrade your CV</button>
        </div>
        <div className=" container flex justify-center flex-row gap-2">
          <div className="container bg-customGreen w-5 h-auto rounded-tl-3xl rounded-br-3xl"></div>
          <img src="src\assets\images\HeroImage.png" alt="custom CV image" />
        </div>
      </div>
    </>
  )
}

export default Hero