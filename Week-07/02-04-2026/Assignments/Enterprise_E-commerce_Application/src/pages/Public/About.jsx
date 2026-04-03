import React from "react";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Welcome to Enterprise E-Commerce, your trusted online shopping destination.</p>
      <p>We offer a wide range of high-quality products with exceptional customer service.</p>
      <div className="about-content">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To provide customers with the best shopping experience through quality products, competitive prices, and outstanding service.</p>
        </div>
        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Quality</li>
            <li>Integrity</li>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

