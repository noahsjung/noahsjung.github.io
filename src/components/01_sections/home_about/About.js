import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../../files/resume 01.29.20.pdf';

function About(props) {
  return (
    <div className="about" id="about">
      <div className="container">
        <h3 className="about-word">About</h3>
        <div className="content">
          <h1 className="left">
            Hi! I am{' '}
            <Link to="AboutMore" className="name">
              Noah Jung{' '}
            </Link>
            — <br /> a Product Designer based in Philadelphia.
          </h1>
          <div className="right">
            <h3 className="description">
              At the intersection between design, technology, and business, I
              create meaningful experiences and intuitive interfaces to make
              people&apos;s lives happier and more efficient.
              <br />
              <br />I have worked at agile startups such as{' '}
              <a href="https://modi.luxrobo.com/">Luxrobo</a>,{' '}
              <a href="https://www.giantshoulders.co/">Giant Shoulders</a>, and
              &nbsp;
              <a href="https://www.weddell.co/">Weddell Co.</a> as a designer to
              build products from scratch. I am currently looking for new
              opportunities after studying Industrial Design at{' '}
              <a href="https://www.risd.edu/" target="blank">
                Rhode Island School of Design
              </a>
              .
            </h3>
            <div className="buttons">
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
            <div className="learn-more">
              <h3>
                <Link to="/AboutMore">Learn more</Link>
                <i className="fas fa-angle-right"></i>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
