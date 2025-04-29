import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-700 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-blue-700">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to="/" className="hover:text-blue-600 transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/doctors" className="hover:text-blue-600 transition">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/appointments" className="hover:text-blue-600 transition">Appointments</NavLink>
            </li>
            <li>
              <NavLink to="/notifications" className="hover:text-blue-600 transition">Notifications</NavLink>
            </li>
            <li>
              <HashLink to="/#contact" className="hover:text-blue-600 transition">Contact Us</HashLink>
            </li>
            <li>
              <NavLink to="/profile" className="hover:text-blue-600 transition">Profile</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-6 text-blue-700">Follow Us</h3>
          <div className="flex space-x-6 text-3xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-blue-700">Our Mission</h3>
          <p className="text-gray-600">
            Empowering patients with easy access to top doctors and healthcare solutions, making healthcare more accessible, personalized, and transparent.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 text-center pt-6 text-sm text-gray-500 animate-fadeIn">
        Made by{" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-700 hover:text-blue-500 transition"
        >
          Ayush Jyoti
        </a>{" "} 
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
