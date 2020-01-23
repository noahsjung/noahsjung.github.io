import React from 'react';
import { Link } from 'react-scroll';

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
              // onSetActive={this.handleSetActive}
            >
              <h3>Noah Jung</h3>
            </Link>
          </div>
          <nav className="header-right">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              // onSetActive={this.handleSetActive}
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
              // onSetActive={this.handleSetActive}
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
              // onSetActive={this.handleSetActive}
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              // onSetActive={this.handleSetActive}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
