// Footer.js
import ElevateCv from "../../assets/images/elevateCV-icon.svg";
import InstagramIcon from "../../assets/images/instagram-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import FacebookIcon from "../../assets/images/facebook-icon.svg";
import LinkedinIcon from "../../assets/images/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-teal-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="p-17 w-full md:w-1/4 mb-4 md:mb-0 flex flex-col item-center">
              <img src={ElevateCv} alt="ElevateCV Logo" className="mb-4" />
              <p className="text-justify">
                Commodo varius tellus tempor urna montes dui donec ornare id.
                Lectus ut felis dui viverra et sit morbi.
              </p>
            </div>
            <div className="pl-5 w-full md:w-1/2 mb-4 md:mb-0 flex flex-wrap">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col">
                <h4 className="font-bold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li>Endorsements</li>
                  <li>Partnerships</li>
                  <li>Testimonials</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col">
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>Terms & Conditions</li>
                  <li>Account</li>
                  <li>Privacy</li>
                  <li>Customer Service</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col">
                <h4 className="font-bold mb-4">Terms</h4>
                <ul className="space-y-2">
                  <li>Guidelines</li>
                  <li>Contact Us</li>
                  <li>YouTube</li>
                  <li>Subscribe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-300 py-4">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center border-teal-800 pt-6">
          <p className="text-sm text-teal-800">
            © 2024 ElevateCV All rights reserved.
          </p>
          <div className="flex space-x-4 md:w-1/2">
            <p className="text-teal-800">Follow us:</p>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
