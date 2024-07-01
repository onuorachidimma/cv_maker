import googleIcon from "../assets/images/google.svg";
import LinkedinIcon from "../assets/images/Lindin-icon.svg";
function SocialAuthButtons() {
  //   const handleGoogleLogin = () => {
  //     alert("Continue with Google");
  //   };

  //   const handleLinkedInLogin = () => {
  //     alert("Continue with LinkedIn");
  //   };

  return (
    <div className="social-auth-buttons justify-center  items-center flex flex-col gap-3 ">
      <button
        // onClick={handleGoogleSignup}
        className=" bg-[#1e6ae4] text-[#FFFFFF] pr-20 pl-7 py-2 text-xs sm:text-x md:text-base font-medium  flex justify-center items-center rounded-3xl"
        type="submit"
      >
        <img
          className="block pr-2"
          src={googleIcon}
          alt="Google Signup Image"
        />
        Continue with Google
      </button>
      <button
        //   onClick={handleLinkedInSignup}
        className="  bg-[#1e6ae4] text-[#FFFFFF] pr-20 pl-7 text-xs sm:text-x md:text-base font-medium  flex justify-center items-center rounded-3xl py-2"
      >
        <img
          className="block pr-2 "
          src={LinkedinIcon}
          alt="LinkedIn Signup Image"
        />
        Continue with LinkedIn
      </button>
    </div>
  );
}

export default SocialAuthButtons;
