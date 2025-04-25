import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0f434e' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Charity Tracking and Management System
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/donate" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/charities" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Charities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink
              to="/login"
              className={({ isActive }) => "btn btn-light btn-sm me-2" + (isActive ? " active" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => "btn btn-outline-light btn-sm" + (isActive ? " active" : "")}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
