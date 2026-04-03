import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Page</h1>
      <p>This is the contact page of our React application.</p>
      <p>You can reach us at</p>
      <p>contact@example.com</p>
      <p>Phone no: 9784123334</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    background: "#000000",
  },
};

export default Contact;