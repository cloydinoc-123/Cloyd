// Home.jsx
import React from "react";
import "./Home.css";

export default function Home({ children }) {
  return (
    <div className="page-container">
      
      {/* Main Content - Hero Section */}
      <main className="main-content">
        <div className="home-container">
          <div className="home-grid">
            
            {/* Left Text Card */}
            <div className="glass-card">
              <h2 className="hi-text">Hi, I am</h2>
              <h1 className="name">Cloyd Inoc</h1>
              <h3 className="title">
                Web Designer <br />
              </h3>
              <p className="description">
                I craft visually captivating and user-friendly digital experiences by combining creativity, sleek UI design, and seamless interactions that engage and inspire.
              </p>
            </div>

            {/* Right Photo */}
            <div className="photo-wrapper">
              <div className="glow-effect"></div>
              <img src="/profile.jpg" alt="Cloyd Inoc" className="profile-photo" />
            </div>

          </div>
        </div>
      </main>

      {/* All Other Sections */}
      <div className="sections-container">
        {children}
      </div>
    </div>
  );
}