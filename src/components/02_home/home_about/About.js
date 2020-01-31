import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax, Power2 } from 'gsap';
import { LiquidDistortionText } from 'react-text-fun';

import resume from '../../../files/resume_01.29.20.pdf';
import AboutDescription from './AboutDescription';

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
      delay: 0.5
    });
    TweenMax.from(description, 1.2, {
      opacity: 0,
      x: 50,
      ease: Power2.easeIOut,
      delay: 0.8
    });
    TweenMax.from(aboutWord, 1, {
      opacity: 0,
      y: 20,
      ease: Power2.easeOut,
      delay: 1.15
    });
    TweenMax.from(buttons, 1.3, {
      opacity: 0,
      y: 20,
      ease: Power2.easeOut,
      delay: 1
    });
    TweenMax.from(learnMore, 1.3, {
      opacity: 0,
      y: 20,
      ease: Power2.easeOut,
      delay: 1.15
    });
    console.log(learnMore);
  });

  return (
    <div
      className="about"
      id="about"
      ref={el => {
        about = el;
      }}
    >
      <h4
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
        {/* About */}
      </h4>

      <h1
        className="short"
        ref={el => {
          short = el;
        }}
      >
        Hi! I am{' '}
        <Link to="about-me" className="name">
          Noah Jung{' '}
        </Link>
        — <br /> a Product Designer based in Philadelphia.
      </h1>
      <h4
        className="description"
        ref={el => {
          description = el;
        }}
      >
        <AboutDescription />
      </h4>
      <div
        className="buttons"
        ref={el => {
          buttons = el;
        }}
      >
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/noahsjung/"
          target="blank"
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a className="resume" href={resume} target="blank">
          <i className="far fa-file"></i>
          Resume
        </a>
      </div>
      <div
        className="learn-more"
        ref={el => {
          learnMore = el;
        }}
      >
        <h4>
          <Link to="/about-me">Learn more</Link>
          <i className="fas fa-angle-right"></i>
        </h4>
      </div>
    </div>
  );
}

export default About;
