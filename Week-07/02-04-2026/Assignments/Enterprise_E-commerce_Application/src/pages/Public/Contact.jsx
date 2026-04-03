import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Get in touch with us!</p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>contact@enterprise-ecommerce.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>123 Commerce Street<br />Business City, BC 12345</p>
        </div>
      </div>

      <form className="contact-form">
        <h2>Send us a message</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
}
;

export default Contact;