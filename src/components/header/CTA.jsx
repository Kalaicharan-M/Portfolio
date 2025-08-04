import React from 'react';
import CV from '../../assets/CHARAN-RESUME.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary" aria-label="Download Resume">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" aria-label="Contact Me">
        Let's talk
      </a>
    </div>
  );
};
export default CTA;
