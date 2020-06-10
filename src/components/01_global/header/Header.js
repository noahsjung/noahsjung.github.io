import React from 'react';
import { Link } from 'react-scroll';

//styles
import HeaderContainer from '../../../styles/02_tools/styled_component/components/HeaderContainerStyle';
import { Note } from '../../../styles/02_tools/styled_component/components/Fonts';

import HeaderLogo from './HeaderLogo';
import DarkMode from '../dark_mode/DarkMode';

function Header(props) {
  return (
    <HeaderContainer className="header" id="top">
      <div className="header-left">
        <HeaderLogo color={'#888'} />
      </div>
      <nav className="header-center">
        {props.first && (
          <Note className="section">
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
          </Note>
        )}
        {props.second && (
          <Note className="section">
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
          </Note>
        )}
        {props.third && (
          <Note className="section">
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
          </Note>
        )}
        {props.fourth && (
          <Note className="section">
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
          </Note>
        )}
        {props.fifth && (
          <Note className="section">
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
          </Note>
        )}
        {props.sixth && (
          <Note className="section">
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
          </Note>
        )}
        {props.seventh && (
          <Note className="section">
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
          </Note>
        )}
        {props.eighth && (
          <Note className="section">
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
          </Note>
        )}
      </nav>
      <div className="header-right">{/* <DarkMode /> */}</div>
    </HeaderContainer>
  );
}

export default Header;
