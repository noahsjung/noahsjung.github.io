import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TweenMax, Power2 } from 'gsap';
import { LiquidDistortionText } from 'react-text-fun';

//styles
import {
  BigHeader,
  SmallTitle
} from '../../../styles/02_tools/styled_component/components/Fonts';
import Button from '../../../styles/02_tools/styled_component/components/ButtonStyle';

// import resume from '../../../files/resume_01.29.20.pdf';
import AboutDescription from './AboutDescription';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.primary};
  cursor: pointer;
`;

function About(props) {
  let { about, short, description, aboutWord, buttons, learnMore } = useRef(
    null
  );

  //animation
  useEffect(() => {
    TweenMax.to(about, 0, {
      css: { visibility: 'visible' }
    });
    TweenMax.from(short, 1, {
      opacity: 0,
      x: -50,
      ease: Power2.easeOut,
      delay: 1
    });
    TweenMax.from(description, 1.2, {
      opacity: 0,
      x: 50,
      ease: Power2.easeIOut,
      delay: 1.3
    });
    TweenMax.from(aboutWord, 1, {
      opacity: 0,
      y: 20,
      ease: Power2.easeOut,
      delay: 1.65
    });
    TweenMax.from(buttons, 1.3, {
      opacity: 0,
      y: 20,
      ease: Power2.easeOut,
      delay: 1.5
    });
    TweenMax.from(learnMore, 1.3, {
      opacity: 0,
      y: 20,
      ease: Power2.easeOut,
      delay: 1.65
    });
  });

  return (
    <div
      className="about"
      id="about"
      ref={el => {
        about = el;
      }}
    >
      <SmallTitle
        className="about-word"
        ref={el => {
          aboutWord = el;
        }}
      >
        <LiquidDistortionText
          id="about-word"
          text="ABOUT"
          fontFamily="Roboto"
          fontSize={24}
          fill="#c4b2b6"
          speed={0.7}
          volatility={0.04}
        />
      </SmallTitle>

      <BigHeader
        grayhem
        className="short"
        ref={el => {
          short = el;
        }}
      >
        Hi! I am{' '}
        <StyledLink to="about-me" className="name">
          Noah Jung
        </StyledLink>
        — <br /> UX Designer @{' '}
        <StyledLink href="https://https://www.ximedica.com/" target="blank">
          Ximedica
        </StyledLink>
        .
      </BigHeader>
      <SmallTitle
        className="description"
        ref={el => {
          description = el;
        }}
      >
        <AboutDescription />
      </SmallTitle>
      <div
        className="buttons"
        ref={el => {
          buttons = el;
        }}
      >
        <Button
          className="linkedin"
          href="https://www.linkedin.com/in/noahsjung/"
          target="blank"
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </Button>
        {/* <Button className="resume" href={resume} target="blank">
          <i className="far fa-file"></i>
          Resume
        </Button> */}
      </div>
      <div
        className="learn-more"
        ref={el => {
          learnMore = el;
        }}
      >
        <SmallTitle>
          <StyledLink to="/about-me">Learn more</StyledLink>
          <i className="fas fa-angle-right"></i>
        </SmallTitle>
      </div>
    </div>
  );
}

export default About;
