import React from "react";
import "./About.css";
import waterfall from "../../assets/waterfall.png";

const About = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(5, 10, 8, 0.55), rgba(5, 15, 10, 0.85)), url(${waterfall})`
  };

  return (
    <section id="about" className="about" style={backgroundStyle}>
      <h2>About LitFest</h2>
      <p>A celebration of literature, creativity, imagination, and expression.</p>
    </section>
  );
};

export default About;