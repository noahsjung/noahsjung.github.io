import React from 'react';
import { Link } from 'react-scroll';

import HeaderLogo from './HeaderLogo';

function HomeHeader() {
  return (
    <header className="home-header">
      <div className="container">
        <div className="background"></div>
        <div className="header-left">
          <HeaderLogo color={'#888'} />
        </div>
        <nav className="header-center">
          <h4>
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
          </h4>
          <h4>
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
          </h4>
          <h4>
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
          </h4>
        </nav>
        <div className="header-right">{/* <h5>dark mode</h5> */}</div>
      </div>
    </header>
  );
}

export default HomeHeader;
