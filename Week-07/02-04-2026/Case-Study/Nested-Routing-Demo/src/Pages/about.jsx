import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1>About Page</h1>
      <p>This is the about page of our React application.</p>
      <p>It includes navigation, routing, and component rendering</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    background: "black",
  },
};

export default About;