import React, { useState } from 'react';
import { Link } from 'react-scroll';

import HeaderLogo from './HeaderLogo';

// function useHover() {
//   const [hovered, setHovered] = useState('#888');
//   return [hovered];
// }

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="background"></div>
          <div className="header-left">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              <HeaderLogo
                // onMouseEnter={() => setHovered('#0171e3')}
                // onMouseLeave={() => setHovered('#888')}
                color={'#888'}
              />
            </Link>
          </div>
          <nav className="header-center">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Work
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Experience
            </Link>
            {/* <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Contact
            </Link> */}
          </nav>
          <div className="header-right"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
