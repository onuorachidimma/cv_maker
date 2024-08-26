import linkedinIcon from "../assets/images/Lindin-icon.svg";
import GoogleLogin from "./googleLogin";

function SocialAuthButtons() {
  return (
    <div className=" font-sans social-auth-buttons justify-center  items-center flex flex-col gap-2">
      <GoogleLogin />
      <button className="bg-customBlue text-white w-80 py-3 text-xs sm:text-base md:text-base font-medium  flex justify-center rounded-full  gap-2">
        <img
          className="block w-5 h-5"
          src={linkedinIcon}
          alt="LinkedIn Signup Image"
        />
        <p className="pt-1 md:pt-0 sm:pt-1">Continue with LinkedIn</p>
      </button>
    </div>
  );
}

export default SocialAuthButtons;
