import { useState } from "react";
import Logo from "../assets/images/Logo-whitebg.svg";
import Socialsbtn from "../components/SocialAuthButtons";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import signupValidationSchema from "../components/validators/signupValidationSchema";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema, // Use validationSchema here
    onSubmit: (values) => {
      setIsModalOpen(true);
    },
  });

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-sans flex h-screen">
      <div className="flex h-full flex-1 flex-col bg-white p-5">
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center">
            <img className="h-24 w-96" src={Logo} alt="Logo" />
            <Link
              to="/login"
              className="rounded-lg border border-black bg-green-100 px-7 py-2 text-sm"
            >
              Login
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h1 className="md:text-7xl sm:text-7xl lg:text-7xl font-semibold">
                Land Your Dream Job
              </h1>
              <p className="text-xl md:text-xl">
                Join Our Community With Over 1 Million Success Stories
              </p>
            </div>
            <div className="my-7">
              <Socialsbtn />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="mb-5 text-lg border-customLight">
                Or sign up with your Email
              </p>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center"
              >
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`rounded border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } py-5 pl-4 px-24`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.email}
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="mt-6 rounded-3xl bg-customYellow px-3 py-2.5 text-sm font-semibold"
                >
                  Sign Up - It's Completely Free
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <p className="text-xs md:text-sm border-customLight text-center">
            By signing up, I agree to the
            <span className="text-customDeepGreen"> Terms of Use </span>
            and
            <span className="text-customDeepGreen"> Privacy Policy</span>.
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[10%] md:bg-customDarkGreen lg:bg-customDarkGreen" />
      {isModalOpen && (
        <Modal email={formik.values.email} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Signup;
