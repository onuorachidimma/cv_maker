// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <p>Commodo varius tellus tempor urna montes dui donec ornare id. Lectus ut felis dui viverra et sit morbi.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-semibold mb-2">Products</h4>
            <ul>
              <li>Endorsements</li>
              <li>Partnerships</li>
              <li>Testimonials</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul>
              <li>Terms & Condition</li>
              <li>Account</li>
              <li>Privacy</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-semibold mb-2">Terms</h4>
            <ul>
              <li>Guidelines</li>
              <li>Contact Us</li>
              <li>Youtube</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between items-center border-t border-teal-700 pt-4">
          <p className="text-sm">© 2024 ElevateCV All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-xing"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
