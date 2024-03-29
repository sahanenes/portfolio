import React from "react";
import CV from "../../assets/Enes Sahan.docx";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary animation">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
