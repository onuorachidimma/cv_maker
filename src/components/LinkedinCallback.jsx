import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LinkedInCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const redirectUri = import.meta.env.VITE_APP_LINKEDIN_REDIRECT_URI;
    const clientId = import.meta.env.VITE_APP_LINKEDIN_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_APP_LINKEDIN_CLIENT_SECRET;

    if (code) {
      // Ideally, this request should be made from your backend, not the frontend.
      axios
        .post("https://www.linkedin.com/oauth/v2/accessToken", null, {
          params: {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: redirectUri,
            client_id: clientId,
            // You should move the client_secret to your backend for security reasons
            client_secret: clientSecret,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          const accessToken = response.data.access_token;
          // Fetch user data and handle sign-up or login logic here

          // Redirect to a different page or show a success message
          navigate("/");
        })
        .catch((error) => {
          console.error("Error fetching LinkedIn access token", error.message);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default LinkedInCallback;
