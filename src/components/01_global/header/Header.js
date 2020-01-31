import React from 'react';
import { Link } from 'react-scroll';

import HeaderLogo from './HeaderLogo';

function Header(props) {
  return (
    <header className="header" id="top">
      <div className="header-left">
        <HeaderLogo color={'#888'} />
      </div>
      <nav className="header-center">
        {props.first && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.first}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.first}
            </Link>
          </h6>
        )}
        {props.second && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.second}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.second}
            </Link>
          </h6>
        )}
        {props.third && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.third}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.third}
            </Link>
          </h6>
        )}
        {props.fourth && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.fourth}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.fourth}
            </Link>
          </h6>
        )}
        {props.fifth && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.fifth}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.fifth}
            </Link>
          </h6>
        )}
        {props.sixth && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.sixth}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.sixth}
            </Link>
          </h6>
        )}
        {props.seventh && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.seventh}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.seventh}
            </Link>
          </h6>
        )}
        {props.eighth && (
          <h6 className="section">
            <Link
              activeClass="active"
              to={props.eighth}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {props.eighth}
            </Link>
          </h6>
        )}
      </nav>
      <div className="header-right">{/* <h6>dark mode</h6> */}</div>
    </header>
  );
}

export default Header;
