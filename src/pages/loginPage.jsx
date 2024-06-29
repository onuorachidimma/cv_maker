import logo from "../assets/images/Logo-whitebg.svg";
import { Link } from "react-router-dom";
import signinImg from "../assets/images/Signin-Button.svg";
import googleSigninImg from "../assets/images/googleLoginButton.svg";
import linkedInSigninImg from "../assets/images/social_linkedin-with-circle.svg";
import googleIcon from "../assets/images/google.svg";
const LoginPage = () => {
  return (
    <div className="flex flex-wrap font-sans h-screen">
      <div className="w-full md:w-2/3 bg-white text-black">
        <div className="mb-20 w-1/4 bg-black">
          <img className="" src={logo} alt="Logo" />
        </div>

        <div className="w-8/12 mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">Login</h3>

          <div className="mb-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border border-customLight block rounded-md mb-8 py-3 indent-6"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border border-customLight block rounded-md mb-2.5 py-3 indent-6"
            />
            <Link
              to="#"
              className="text-center block text-customDeepGreen underline text-xl font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <div>
            <button
              className="text-white text-2xl font-medium block w-full w-full bg-purple rounded-50px py-4"
              type="submit"
            >
              <p>Sign In</p>
            </button>
            <p className="text-customTextGray text-center my-8">Or</p>
            <button
              className="block text-2xl font-medium w-full flex justify-center items-center rounded-50px bg-customLightBlue  mb-2 py-2"
              type="submit"
            >
              <img
                className="block pr-2"
                src={googleIcon}
                alt="Google Signin Image"
              />
              Continue with Google
            </button>

            <button
              className=" block text-2xl font-medium bg-customBlue w-full flex justify-center items-center mb-5 text-white rounded-50px py-2"
              type="submit"
            >
              <img
                className="block pr-2"
                src={linkedInSigninImg}
                alt="LinkedIn Signin Image"
              />
              Continue with LinkedIn
            </button>
            <p className="text-center text-xl font-medium text-customDeepGreen">
              Not a member yet?
              <Link
                to="#"
                className="text-customDeepGreen underline text-xl font-medimu"
              >
                {" "}
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-purple text-white">I am two</div>
    </div>
  );
};

export default LoginPage;
