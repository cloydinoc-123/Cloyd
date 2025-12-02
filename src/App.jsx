// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // your navbar + footer wrapper
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Scheduling from "./components/Scheduling";   // ← Add this
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scheduling" element={<Scheduling />} />   {/* ← This line */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}