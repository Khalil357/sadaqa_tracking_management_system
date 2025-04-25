import React from 'react';
import '../styles/Donate.css';
import charityImage from '../assets/Charity2.jpg';

const Donate = () => {
  return (
    <div className="donate-page bg-light text-dark">
      {/* Hero Section */}
      <section className="donate-hero text-white text-center">
        <div className="overlay"></div>
        <div className="container py-5 position-relative">
          <h1 className="display-4 fw-bold">Give with Intention</h1>
          <p className="lead">Your sadaqa can change lives. Let’s make every act of giving meaningful and traceable.</p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="container py-5">
        <div className="row g-5">
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">Make a Donation</h2>
            <form className="donation-form">
              <div className="mb-3">
                <label className="form-label">Amount (TZS)</label>
                <input type="number" className="form-control" placeholder="Enter amount" />
              </div>
              <div className="mb-3">
                <label className="form-label">Donation Frequency</label>
                <select className="form-select">
                  <option>One-time</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="example@email.com" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Donate Now</button>
            </form>
          </div>

          {/* Picture Template Section */}
          <div className="col-md-5">
            <h4 className="fw-semibold mb-3">Featured Need</h4>
            <div className="template-box shadow rounded">
              <img src={charityImage} alt="Charity Campaign" className="img-fluid rounded mb-3" />
              <p className="text-muted">This month’s highlighted need: Rebuilding Masjid Pogung—supporting clean water, access to Qur’an, and proper facilities for worshippers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-white py-5 border-top border-bottom">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Why Sadaqa App?</h3>
          <p className="text-muted">Every contribution you make is recorded and visible through your personal dashboard. Your sadaqa reaches verified beneficiaries. We ensure end-to-end transparency with zero hidden fees.</p>
        </div>
      </section>

      {/* Placeholder for Testimonials */}
      <section className="container py-5">
        <h4 className="fw-bold mb-4 text-center">Stories of Impact</h4>
        <div className="testimonial-placeholder p-5 border rounded text-center text-muted">
          [ Placeholder for future testimonials or donor appreciation ]
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-donate bg-dark text-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Serve Humanity?</h2>
          <p>Let’s walk together in faith, compassion, and responsibility.</p>
          <a href="/register" className="btn btn-light btn-lg mt-3">Create Account to Track Your Giving</a>
        </div>
      </section>
    </div>
  );
};

export default Donate;
