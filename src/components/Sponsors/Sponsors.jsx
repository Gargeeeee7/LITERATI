import React from "react";
import "./Sponsors.css";
import sponsorbg from "../../assets/sponsorbg.mp4";
import s1 from "../../assets/images/sponsor1.jpg";
import s2 from "../../assets/images/sponsor2.jpg";

const Sponsors = [
  { img: s1, name: "Main Sponsor" },
  { img: s2, name: "Co Sponsor" },
];

const SponsorsComponent = () => {
  return (
    <section id="sponsors" className="sponsors">
              <video
                className="sponsors-bg-video"
                src={sponsorbg}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
            
              <div className="sponsors-overlay"> </div>
             <div className="sponsors-content">
      <h2>Our Sponsors</h2>
      <div className="sponsor-grid">
        {Sponsors.map((sp, i) => (
        <div key={i} className="sponsor-card">
        <img src={sp.img} alt={sp.name} />
      </div>
      ))}
      </div>
      </div>
    </section>
  );
};

export default SponsorsComponent;