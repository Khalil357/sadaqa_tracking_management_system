import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#0f434e' }}>
      <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">Charity Tracking and Management System</NavLink>
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
      </nav> */}

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <h1>Empower Lives with Your Charity</h1>
        <p>Together we can bring change. Join us today.</p>
      </section>

      {/* About Us */}
      <section className="about-section" id="about">
        <h2 className="mb-4">About Our Mission</h2>
        <p className="text-muted">
          We are dedicated to making every donation count. Our system helps you track your sadaqa, see impact reports,
          and ensure transparency at every step.
        </p>
      </section>

      {/* Features / Charities */}
      <section className="features-section" id="charities">
        <div className="container text-center">
          <h2 className="mb-4">What You Can Do</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Track Donations</h5>
                  <p className="card-text">Keep a history of all your sadaqa and charity contributions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Generate Reports</h5>
                  <p className="card-text">View impact reports and monitor your charity's performance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Get Involved</h5>
                  <p className="card-text">Join our volunteers or campaigns to increase your impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="container my-5 text-center">
        <h2 className="mb-4">Donate</h2>
        <p>Donation functionality coming soon...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container my-5 text-center">
        <h2 className="mb-4">Contact Us</h2>
        <p>Email: support@charitysystem.org</p>
        <p>Phone: +123 456 7890</p>
      </section>

      {/* Footer */}
      <footer>
        <p className="mb-0 text-center">&copy; {new Date().getFullYear()} Charity System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
