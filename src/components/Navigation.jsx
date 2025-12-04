// src/components/Navigation.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Cloyd Inoc</div>

      {/* Burger */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
