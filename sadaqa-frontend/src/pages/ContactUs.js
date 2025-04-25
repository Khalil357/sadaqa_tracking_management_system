import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Mosque:</strong> Masjid Al Anwar</p>
        <p><strong>Location:</strong> Msasani, Dar-es-salaam</p>
        <p><strong>Operating Since:</strong> September 1997 – Present</p>
        <p><strong>Mosque Caretaker:</strong> Mohammad Abdulaziz</p>
        <p><strong>Phone:</strong> 07XX XXX XXX</p>
        <p><strong>Donation Bank:</strong> AMANA BANK</p>
        <p><strong>Donation Details:</strong> Masjid Al Anwar, OJ8XXXXXXXXXXX</p>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="map-section">
        <h3>Find Us on Google Maps</h3>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.8294378978013!2d39.28321831601555!3d-6.760559996686229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f163170e8cb%3A0xa756b9a78e4c0e!2sMasjid%20Al-Anwar%20Msasani!5e0!3m2!1sen!2stz!4v1689083500643!5m2!1sen!2stz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
