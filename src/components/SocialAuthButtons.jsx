import googleIcon from "../assets/images/google.svg";
import linkedinIcon from "../assets/images/Lindin-icon.svg";

function SocialAuthButtons() {
  const clientId = import.meta.env.VITE_APP_LINKEDIN_CLIENT_ID;
  console.log(clientId, "great");
  const redirectUri = import.meta.env.VITE_APP_LINKEDIN_REDIRECT_URI;
  const state = Math.random().toString(36).substring(7); // Generating a random state string for security
  function handleLinkedInLogin() {
    // Construct the LinkedIn authorization URL
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&state=${state}&scope=profile%20email%20openid`;
    // Redirect the user to LinkedIn's OAuth page
    window.location.href = linkedInAuthUrl;
  }

  return (
    <div className="font-sans social-auth-buttons justify-center items-center flex flex-col gap-2">
      <button
        className=" bg-customLightBlue text-white w-80 py-2 text-xs sm:text-x md:text-base font-medium  flex  gap-2 justify-center items-center rounded-full"
        type="submit"
      >
        <img
          className="block w-8 h-8"
          src={googleIcon}
          alt="Google Signup Image"
        />
        <p>Continue with Google </p>
      </button>

      <button
        onClick={handleLinkedInLogin}
        className="bg-customBlue text-white w-80 py-3 text-xs sm:text-base md:text-base font-medium  flex justify-center rounded-full  gap-2"
      >
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
