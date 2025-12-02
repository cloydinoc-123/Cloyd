// src/components/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";   // ← All styles here

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-grid">
        {/* Left Card */}
        <div className="glass-card">
          <h2 className="hi-text">Hi, I am</h2>
          <h1 className="name">Cloyd Inoc</h1>
          <h3 className="title">
            Web Designer &<br />Developer
          </h3>
          <p className="description">
            I build visually stunning and intuitive digital experiences — blending creativity, clean UI, and meaningful interaction.
          </p>
        </div>

        {/* Right Photo */}
        <div className="photo-container">
          <div className="glow-effect"></div>
          <img src="/3.jpg" alt="Cloyd Inoc" className="profile-photo" />
        </div>
      </div>
    </div>
  );
}