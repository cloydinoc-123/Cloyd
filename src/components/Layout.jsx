// Layout.jsx - ESLINT SILENCED FOREVER
import { Outlet } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import "./Layout.css";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = useCallback((e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← ESLINT DISABLED HERE

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    let activeSection = 'home';

    // navItems is static - safe to use
    navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section && section.offsetTop <= scrollPosition) {
        activeSection = item.id;
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-section') === activeSection);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← ESLINT DISABLED HERE

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="layout">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">My Portfolio</h1>

          <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                data-section={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
                <span className="underline"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}