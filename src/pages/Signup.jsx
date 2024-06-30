import Logo from "../assets/images/Logo-whitebg.svg";
import Socialsbtn from "../Components/SocialAuthButtons";
function Signup() {
  return (
    <>
      <div className="flex h-screen">
        {/* White part (3/4 of the screen) */}
        <div className="flex-auto bg-white">
          <div className="flex flex-col justify-center p-8 ">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div className=" flex flex-col justify-center align-middle items-center my-40">
              <div>
                <h1 className="text-6xl font-semibold">Land Your Dream Job</h1>
                <p className=" text-base ml-6 mt-1 mb-6">
                  Join Our Community With Over 1 Million Success Stories
                </p>
              </div>
              <Socialsbtn className="items-center" />

              <div className="flex flex-col justify-center items-center">
                <p className="text-[#9C9C9C]  text-xs my-6">
                  Or sign up with your email.
                </p>
                <input
                  placeholder="Email"
                  className="border border-gray-300 rounded pl-5 pr-40 py-2 mt-2"
                />
                <button className="bg-[#FBBC05] text-sm px-4 py-2 mt-6 rounded-3xl font-semibold">
                  Sign Up - It's Completely free
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[10%] bg-[#005148]"></div>
      </div>
      <div className="flex align-bottom items-center justify-center">
        <p className="text-[#9C9C9C] text-sm">
          {" "}
          By signing up, I agree to the Terms of Use and Privacy Policy
        </p>
      </div>
    </>
  );
}

export default Signup;
