import googleIcon from "../assets/images/google.svg";
import linkedinIcon from "../assets/images/Lindin-icon.svg";

function SocialAuthButtons() {
  return (
    <div className="social-auth-buttons justify-center  items-center flex flex-col gap-2">
      <button
        className=" bg-[#4285F4] text-[#FFFFFF] w-80 py-2 text-xs sm:text-x md:text-base font-medium  flex  gap-2 justify-center items-center rounded-full"
        type="submit"
      >
        <img
          className="block w-8 h-8"
          src={googleIcon}
          alt="Google Signup Image"
        />
        <p>Continue with Google </p>
      </button>
      <button className="bg-[#2427AB] text-[#FFFFFF] w-80 py-3 text-xs sm:text-x md:text-base font-medium  flex justify-center rounded-full  gap-2">
        <img
          className="block w-5 h-5"
          src={linkedinIcon}
          alt="LinkedIn Signup Image"
        />
        <p>Continue with Google </p>
      </button>
    </div>
  );
}

export default SocialAuthButtons;
