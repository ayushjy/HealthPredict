import React from "react";
import aboutImage from "../images/aboutimg.jpg"; // <-- Replace with a soft illustration

const AboutUs = () => {
  return (
    <section className="relative  py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left font-[Poppins]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to providing the best healthcare solutions, connecting patients
            with trusted medical professionals easily and efficiently. Our mission is to ensure
            everyone has access to top-tier healthcare services, empowering a healthier tomorrow.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About Us Illustration"
            className="w-full max-w-md mx-auto animate-fadeIn"
          />
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default AboutUs;
