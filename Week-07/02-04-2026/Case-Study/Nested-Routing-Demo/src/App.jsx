import Home from "./Pages/Home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "black",
    color: "white",
    alignItems: "center",
  },
  logo: {
    margin:0
  },
  link: ({isActive}) => ({
    margin: "0 15px",
    textDecoration: "none",
    color: isActive ? "yellow" : "white",
    fontWeight: isActive ? "bold" : "normal"}),
  activeLink: {
    color: "yellow",
    fontWeight: "bold",
  },
  container: {
    padding: "40px",
    textAlign: "center",
    background: "black",
  },
  heading: {
    color: "white",
  },
  paragraph: {
    color: "white",
    fontSize: "18px",
  }
};
export default App;
