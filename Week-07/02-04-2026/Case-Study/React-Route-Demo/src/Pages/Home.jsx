import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome to our React Router Demo application</p>
      <p>This is the homepage where users land first</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    background: "black",
  },
};

export default Home;