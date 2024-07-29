import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import LoginSchema from "../components/validators/LoginSchema";
import logo from "../assets/images/Logo-whitebg.svg";
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
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
            Login
          </h3>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ touched, errors }) => (
              <Form className="mb-8">
                <div className="mb-8">
                  <div className="mb-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`w-full border ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-customLight"
                      } block rounded-md mb-2.5 py-3 indent-2 sm:indent-3 md:indent-6 text-xs sm:text-x md:text-xl`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="mb-8">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={`w-full border ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-customLight"
                      } block rounded-md mb-2.5 py-3 indent-2 sm:indent-3 md:indent-6 text-xs sm:text-x md:text-xl`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <Link
                    to="/signup"
                    className="text-center block text-customDeepGreen underline text-xs sm:text-x md:text-base font-medium"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div>
                  <button
                    className="text-white text-xs sm:text-x md:text-base font-medium block w-full bg-purple rounded-50px py-4"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="text-customTextGray text-center my-5">Or</p>
          <button
            className="text-xs sm:text-x md:text-base font-medium w-full flex justify-center items-center rounded-50px bg-customLightBlue mb-3 py-2"
            type="button"
          >
            <img
              className="block pr-2"
              src={googleIcon}
              alt="Google Signin Image"
            />
            Continue with Google
          </button>

          <button
            className="text-xs sm:text-x md:text-base font-medium bg-customBlue w-full flex justify-center items-center mb-5 text-white rounded-50px py-2"
            type="button"
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

      <div className="hidden md:block md:w-6/12 lg:w-1/3 bg-purple text-white relative">
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
