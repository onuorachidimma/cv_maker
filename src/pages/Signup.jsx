import Logo from "../assets/images/Logo-whitebg.svg";
import Socialsbtn from "../components/SocialAuthButtons";
function Signup() {
  return (
    <div className="flex h-screen">
      <div className="flex-auto flex flex-col bg-white  p-5">
        <div className="flex flex-col flex-1 h-full">
          <img className="w-96 h-24" src={Logo} alt="Logo" />
          <div className=" flex flex-col justify-center  items-center">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-6xl font-semibold">Land Your Dream Job</h1>
              <p className=" text-base">
                Join Our Community With Over 1 Million Success Stories
              </p>
            </div>
            <div className="my-7">
              <Socialsbtn />
            </div>

            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#9C9C9C] mb-5 text-xl">
                Or sign up with your email.
              </p>
              <input
                placeholder="Email"
                className="border border-gray-300 rounded pl-5 w-[600px] py-5"
              />
              <button className="bg-[#FBBC05] text-sm px-5 py-2.5 mt-6 rounded-3xl font-semibold">
                Sign Up - It's Completely free
              </button>
            </div>
          </div>
        </div>

        <div className="flex align-bottom items-center justify-center">
          <p className="text-[#9C9C9C] text-sm">
            {" "}
            By signing up, I agree to the Terms of Use and Privacy Policy
          </p>
        </div>
      </div>

      <div className=" w-[10%] bg-[#005148]" />
    </div>
  );
}

export default Signup;
