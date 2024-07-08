import Logo from "../assets/images/Logo-whitebg.svg";
import Socialsbtn from "../components/SocialAuthButtons";
function Signup() {
  return (
    <div className="flex h-screen">
      <div className="flex h-full flex-1 flex-col bg-white p-5">
        <div className="h-full flex flex-col">
          <img className="h-24 w-96" src={Logo} alt="Logo" />
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h1 className="text-6xl font-semibold">Land Your Dream Job</h1>
              <p className="text-xl">
                Join Our Community With Over 1 Million Success Stories
              </p>
            </div>
            <div className="my-7">
              <Socialsbtn />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="mb-5 text-lg text-[#9C9C9C]">
                Or sign up with your Email
              </p>
              <input
                placeholder="Email"
                className="w-[500px] rounded border border-gray-300 py-5 pl-5"
              />
              <button className="mt-6 rounded-3xl bg-[#FBBC05] px-5 py-2.5 text-sm font-semibold">
                Sign Up - It's Completely free
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center align-bottom">
          <p className="text-sm text-[#9C9C9C]">
            {" "}
            By signing up, I agree to the Terms of Use and Privacy Policy
          </p>
        </div>
      </div>

      <div className="w-[10%] bg-[#005148]" />
    </div>
  );
}

export default Signup;
