import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-active">
        <h2 className="nav-logo">
          <NavLink to={"/"}>HealthPredict</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            {/* Know Your Symptom will open your Python ML app */}
            <a href="http://localhost:4000/" target="_blank" rel="noopener noreferrer">
             Check Symptom
            </a>
          </li>
          <li>
            <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">
              Know Your Disease
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
