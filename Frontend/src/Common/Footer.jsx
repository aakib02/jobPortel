import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-600  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About JobHub</h3>
            <p className="text-gray-200">
              JobHub is your ultimate platform to find the best job opportunities and
              connect with top companies. Join us and take your career to the next level.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-200 hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-gray-200 hover:text-gray-400">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-200">Email: support@jobhub.com</span>
              </li>
              <li>
                <span className="text-gray-200">Phone: +123 456 789</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
           
              <a
              
                href="https://facebook.com"
                className="text-gray-200 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
            <FaFacebookSquare />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-200 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaTwitterSquare />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-200 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-200 text-sm">
          <p>&copy; 2024 JobHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
