import logo from "../assets/images/Logo-whitebg.svg";
import { Link } from "react-router-dom";
import linkedInSigninImg from "../assets/images/social_linkedin-with-circle.svg";
import googleIcon from "../assets/images/google.svg";
import loginPicture from "../assets/images/LoginPage-picture.svg";
import yellowAngle from "../assets/images/YellowVector 1.svg";
const LoginPage = () => {
  return (
    <div className="flex flex-wrap font-sans h-screen lg:max-w-1700px lg:mx-auto">
      <div className="w-full md:w-6/12 lg:w-2/3 bg-white text-black">
        <div className="mb-20 w-1/4">
          <img className="" src={logo} alt="Logo" />
        </div>

        <div className="w-10/12 md:w-10/12 lg:w-6/12 mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl  font-bold mb-8 text-center">
            Login
          </h3>

          <div className="mb-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border border-customLight block rounded-md mb-8 py-3 indent-2 sm:indent-3 md:indent-6 text-xs sm:text-x md:text-xl"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border border-customLight block rounded-md mb-2.5 py-3 indent-2 sm:indent-3 md:indent-6 text-xs sm:text-x md:text-xl"
            />
            <Link
              to="#"
              className="text-center block text-customDeepGreen underline text-xs sm:text-x md:text-base  font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <div>
            {/* ############# Sign in button ########################## */}
            <button
              className="w-full mx-auto lg:w-10/12 lg:mx-auto bg-customDarkGreen text-white text-xs sm:text-x md:text-base font-medium block w-full w-full bg-purple rounded-50px py-4"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-customTextGray text-center my-5">Or</p>

            {/* ############# Sign in with Google button ########################## */}
            <button
              className="w-full lg:w-10/12 lg:mx-auto block text-xs sm:text-x md:text-base font-medium w-full flex justify-center items-center rounded-50px bg-customLightBlue  mb-3 py-2"
              type="submit"
            >
              <img
                className="block pr-2"
                src={googleIcon}
                alt="Google Signin Image"
              />
              Continue with Google
            </button>

            {/* ############# Sign in with LinkedIn button ########################## */}
            <button
              className="w-full lg:w-10/12 lg:mx-auto block text-xs sm:text-x md:text-base  font-medium bg-customBlue w-full flex justify-center items-center mb-5 text-white rounded-50px py-2"
              type="submit"
            >
              <img
                className="block pr-2"
                src={linkedInSigninImg}
                alt="LinkedIn Signin Image"
              />
              Continue with LinkedIn
            </button>
            <p className="text-center flex justify-between text-xs sm:text-x lg:text-base font-medium text-customDeepGreen">
              Not a member yet?
              <Link
                to="/signup"
                className="text-customDeepGreen underline text-xs sm:text-x lg:text-base font-medium"
              >
                {" "}
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-6/12 lg:w-1/3 bg-customDarkGreen text-white relative">
        <div className="w-8/12 mx-auto mt-14 relative">
          <img className="w-full" src={loginPicture} alt="reviewer Picture" />
          <img className="absolute bottom-0 left-0" src={yellowAngle} alt="" />
        </div>

        <div className="w-8/12 mx-auto bg-white text-black rounded-b-3xl p-9">
          <h4 className="text-2xl font-bold">Modupe Apaokaghi</h4>
          <p className="font-medium mb-4">Group Manager at Adobe</p>
          <q className="font-normal">
            ElevateCV made managing a high volume pipeline while exploring
            different functions a breeze. This tool is a game-changer!
          </q>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
