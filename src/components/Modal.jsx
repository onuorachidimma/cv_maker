import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Vector_icon from "../assets/images/Vector-icon.svg";

function Modal({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [setPasswordCriteria] = useState({
    length: false,
    capital: false,
    lowercase: false,
    number: false,
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const length = password.length >= 8;
    const capital = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);

    setPasswordCriteria({
      length,
      capital,
      lowercase,
      number,
    });

    return length && capital && lowercase && number;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSignUp = () => {
    let tempErrors = {};
    if (!email) tempErrors.email = "Email is required";
    else if (!validateEmail(email)) tempErrors.email = "Email is invalid";

    if (!password) tempErrors.password = "Password is required";
    else if (!validatePassword(password))
      tempErrors.password = "Password does not meet the criteria";

    if (confirmPassword !== password)
      tempErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(tempErrors).length === 0) {
      // Simulate server-side email validation (e.g., check if email is already registered)
      if (email === "test@example.com") {
        tempErrors.email = "Email is already registered";
      } else {
        closeModal();
      }
    }

    setErrors(tempErrors);
  };

  return (
    <div className=" text-20px font-sans fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto relative">
        <p className="font-bold text-center pb-3">Sign Up</p>

        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <img src={Vector_icon} alt="vector-icon" />
        </button>
        <div className="mb-4">
          <p className="pb-1">First Name</p>
          <input
            placeholder="Type in your firstname"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <p className="pb-1">Last Name</p>
          <input
            placeholder="Type in your lastname"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <p className="pb-1">Email</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <p className="pb-1">Password</p>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
          >
            {passwordVisible ? (
              <FaEyeSlash className="mt-5" />
            ) : (
              <FaEye className="mt-5" />
            )}
          </button>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-6 relative">
          <p className="pb-1">Confirm Password</p>
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
          >
            {passwordVisible ? (
              <FaEyeSlash className="mt-5" />
            ) : (
              <FaEye className="mt-5" />
            )}
          </button>
          {errors.confirmPassword && (
            <p className="text-orange-700 -500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <button
          onClick={handleSignUp}
          className=" font-bold px-12 py-3 bg-[#FBBC05] rounded-lg shadow-lg hover:bg-[#FBBC05] transition duration-300 mb-4 text-md mx-auto block"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
