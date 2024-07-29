import React from "react";
import googleIcon from "../assets/images/google.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

const GoogleLogin = () => {
  
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in:", result.user);
        if (result.user) {
          window.location.href = "./dashboard";
        }
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.warn("Authentication popup closed by user");
        } else {
          console.error("An error occurred during sign-in:", error);
        }
      });
  };

  return (
    <div>
      <button
        onClick={googleLogin}
        className=" bg-customLightBlue text-white w-80 py-2 text-xs sm:text-x md:text-base font-medium  flex  gap-2 justify-center items-center rounded-full"
      >
        <img
          className="block w-8 h-8"
          src={googleIcon}
          alt="Google Signup Image"
        />
        <p>Continue with Google </p>
      </button>
    </div>
  );
};

export default GoogleLogin;
