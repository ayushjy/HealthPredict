import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
