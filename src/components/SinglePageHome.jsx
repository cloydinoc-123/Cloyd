// components/SinglePageHome.jsx - CREATE THIS FILE
import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./SinglePageHome.css";

export default function SinglePageHome() {
  return (
    <>
      <section id="home" className="section-wrapper">
        <Home />
      </section>
      <section id="about" className="section-wrapper">
        <About />
      </section>
      <section id="skills" className="section-wrapper">
        <Skills />
      </section>
      <section id="projects" className="section-wrapper">
        <Projects />
      </section>
      <section id="contact" className="section-wrapper">
        <Contact />
      </section>
    </>
  );
}