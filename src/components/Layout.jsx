// src/components/Layout.jsx
import { Outlet, useLocation, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // burger menu state

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/scheduling", label: "Scheduling" },
    { path: "/contact", label: "Contact" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="layout">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">My Portfolio</h1>

          {/* Burger icon */}
          <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* Nav links */}
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.label}
                {location.pathname === item.path && <span className="underline"></span>}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
