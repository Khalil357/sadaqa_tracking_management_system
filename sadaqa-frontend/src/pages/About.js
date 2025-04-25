import React from 'react';
import '../styles/About.css';
import charityImage from '../assets/Charity2.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-white text-center">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Empowering lives with transparency, technology, and trust.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-5 fade-in">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={charityImage} alt="Our Mission" className='mission-image img-fluid rounded shadow' />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Our Mission</h2>
            <p>At <strong>CharitySystem</strong>, we are redefining charitable giving through digital transparency, accountability, and community connection.</p>
            <ul className="mission-list">
              <li><i className="fas fa-check-circle text-success me-2"></i> Transparent and trackable donations</li>
              <li><i className="fas fa-check-circle text-success me-2"></i> Verified and trusted charities</li>
              <li><i className="fas fa-check-circle text-success me-2"></i> Empowering donor decision-making</li>
              <li><i className="fas fa-check-circle text-success me-2"></i> Real-time impact tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 text-white text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <h2 className="counter">10K+</h2>
              <p>Donations Tracked</p>
            </div>
            <div className="col-md-3">
              <h2 className="counter">500+</h2>
              <p>Verified Charities</p>
            </div>
            <div className="col-md-3">
              <h2 className="counter">120+</h2>
              <p>Impact Reports</p>
            </div>
            <div className="col-md-3">
              <h2 className="counter">30+</h2>
              <p>Volunteer Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Area */}
      <section className="container py-5 fade-in">
        <div className="text-center">
          <h2 className="fw-bold mb-4">Building Trust Through Innovation</h2>
          <p className="text-muted">Our system integrates real-time data, blockchain verification, and AI reporting to ensure every cent is accounted for. We're not just a platform — we're a movement for smarter, honest charity.</p>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="container py-5 text-center fade-in">
        <h2 className="fw-bold mb-4">What People Are Saying</h2>
        <p className="text-muted">Testimonials and success stories coming soon!</p>
        <div className="placeholder-template mt-4 p-5 border rounded shadow-sm">
          <em>[ Placeholder for user testimonials or featured stories ]</em>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Join Us & Make a Difference</h2>
          <p>Together, let's make charitable giving smarter, faster, and more impactful.</p>
          <a href="/register" className="btn btn-success btn-lg mt-3">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default About;
