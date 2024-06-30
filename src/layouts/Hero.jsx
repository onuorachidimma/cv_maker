

function Hero() {
  return (
    <>
      <div className="w-auto m-28">
        <h1 className="text-center text-6xl font-bold m-6">Craft Your Future with a CV That Captivates and Inspires.</h1>
        <h4 className="text-center text-xl m-10 mx-36 ">Our platform empowers you to create a captivating online CV that highlights your achievements, skills, and unique personality.</h4>
        <div className="flex m-10 justify-center gap-6"> 
          <button className="bg-yellow-500 py-2.5 px-5 rounded-3xl font-semibold text-xl">Sign Up - It’s completely free</button>
          <button className="bg-green-700 py-2.5 px-5 rounded-3xl font-semibold text-xl">Watch a Demo</button>
        </div>
        <div className="flex m-10 justify-center gap-3 w-9/12 h-1/3">
          <div className=" container flex-1 w-8 bg-green-700 rounded-tl-3xl rounded-br-3xl"></div>
          <div className="container flex w-32 bg-green-200"></div>
        </div>
      </div>
    </>
  )
}

export default Hero