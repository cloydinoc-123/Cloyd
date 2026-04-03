// App.jsx - COMPLETE REPLACE
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";

import Layout from "./components/Layout";
import SinglePageHome from "./components/SinglePageHome";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SinglePageHome />} />
          <Route path="*" element={<SinglePageHome />} /> {/* Catch all routes */}
        </Route>
      </Routes>
    </Router>
  );
}