import { useState } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Vector_icon from "../assets/images/Vector-icon.svg";
import SignupSchema from "../components/validators/SignupSchema";

const Modal = ({ email, closeModal }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: email,
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      closeModal();
    },
  });

  return (
    <div className="text-20px font-sans fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto relative">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <img src={Vector_icon} alt="vector-icon" />
        </button>
        <p className="font-bold text-2xl text-center mt-7 pb-5">Sign Up</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <p className="pb-1 pl-1">Email</p>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mb-4 relative">
            <p className="pb-1 pl-1">Password</p>
            <div className="relative flex items-center">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-0 pr-3 text-gray-600"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="mb-6 relative">
            <p className="pb-1 pl-1">Confirm Password</p>
            <div className="relative flex items-center">
              <input
                name="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute right-0 pr-3 text-gray-600"
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="px-8 font-bold block py-2 mx-auto bg-customYellow rounded-xl hover:bg-yellow-300 transition duration-200"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  email: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
