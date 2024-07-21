import { useState } from "react";
import Logo from "../assets/images/Logo-whitebg.svg";
import Socialsbtn from "../components/SocialAuthButtons";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState(""); // Add state for email
  const navigate = useNavigate();

  // Arrow function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Arrow function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Arrow function for navigation
  const handleLoginClick = () => {
    navigate("/loginPage");
  };

  return (
    <div className="font-sans flex h-screen">
      <div className="flex h-full flex-1 flex-col bg-white p-5">
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center">
            <img className="h-24 w-96" src={Logo} alt="Logo" />
            <button
              onClick={handleLoginClick} // Use handleLoginClick for navigation
              className="rounded-lg border border-black bg-green-100 px-7 py-2 text-sm"
            >
              Login
            </button>
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
              <p className="mb-5 text-lg  border-customLight">
                Or sign up with your Email
              </p>
              <input
                placeholder="Email"
                value={email} // Bind email state to the input
                onChange={(e) => setEmail(e.target.value)} // Handle input change
                className="lg:max-w-lg rounded border border-gray-300 py-5 pl-4 pr-48"
              />
              <button
                onClick={openModal}
                className="mt-6 rounded-3xl bg-customYellow px-3 py-2.5 text-sm font-semibold"
              >
                Sign Up - It's Completely Free
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <p className="text-xs md:text-sm  border-customLight text-center">
            By signing up, I agree to the
            <span className="text-[#005148]"> Terms of Use </span>
            and
            <span className="text-[#005148]"> Privacy Policy</span>.
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[10%] md:bg-customDarkGreen lg:bg-customDarkGreen" />
      {isModalOpen && <Modal email={email} closeModal={closeModal} />}{" "}
      {/* Pass email to Modal */}
    </div>
  );
};

export default Signup;
