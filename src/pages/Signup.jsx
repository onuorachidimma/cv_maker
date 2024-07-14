import { useState } from "react";
import Logo from "../assets/images/Logo-whitebg.svg";
import Socialsbtn from "../components/SocialAuthButtons";
import Modal from "../components/Modal";

function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex h-full flex-1 flex-col bg-white p-5">
        <div className="h-full flex flex-col">
          <img className="h-24 w-96" src={Logo} alt="Logo" />
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h1 className="md:text-6xl sm:text-5xl lg:text-7xl font-semibold">
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
              <p className="mb-5 text-lg text-[#9C9C9C]">
                Or sign up with your Email
              </p>
              <input
                placeholder="Email"
                className="w-full lg:max-w-lg rounded border border-gray-300 py-5 pl-5 pr-10"
              />
              <button
                onClick={openModal}
                className="mt-6 rounded-3xl bg-[#FBBC05] px-3 py-2.5 text-sm font-semibold"
              >
                Sign Up - It's Completely Free
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <p className="text-xs md:text-sm text-[#9C9C9C] text-center">
            By signing up, I agree to the
            <span className="text-[#005148]"> Terms of Use </span>
            and
            <span className="text-[#005148]"> Privacy Policy</span>.
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-[10%] md:bg-[#005148] lg:bg-[#005148]" />

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Signup;
