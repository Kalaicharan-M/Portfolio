import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { FiChevronDown } from 'react-icons/fi';


const Header = () => {
  return (
    <header id="home">
  <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Kalaicharan M</h1>
    <h5 className="text-light"><b>AI, Data Science & Analytics Developer</b></h5>
    
    <CTA />
    <a href="#contact" className="scroll__down">
          Scroll Down 
        </a>

    <HeaderSocials />

    {/* New scroll button */}
    <div className="scroll__down-wrapper">
  <a href="#contact" className="scroll__circle">
    
    <FiChevronDown />
  </a>
</div>

  </div>
</header>

  );
};

export default Header;
