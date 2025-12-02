// src/components/Layout.jsx
import { Outlet, useLocation, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/scheduling", label: "Scheduling" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <div className="layout">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">My Portfolio</h1>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="underline"></span>
                )}
              </Link>
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
