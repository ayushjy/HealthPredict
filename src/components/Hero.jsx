import React from "react";
import heroImage from "../images/heroimg.jpg"; // <-- Replace with a modern illustration

const Hero = () => {
  return (
    <section className="relative  min-h-screen flex items-center overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left font-[Poppins]">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">
            Health & Wellness
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Trusted Healthcare <br className="hidden md:block" /> At Your Fingertips
          </h1>

          <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
            Book consultations with certified doctors and wellness experts. 
            Easy, fast, and at your convenience — because your health deserves the best.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white border-2 border-pink-400 text-pink-500 font-semibold rounded-xl hover:bg-pink-50 transition">
              How It Works
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Healthcare Illustration"
            className="w-full max-w-lg mx-auto animate-fadeIn"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
