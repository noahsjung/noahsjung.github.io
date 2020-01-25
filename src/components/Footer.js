import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../files/resume 01.18.20.pdf';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="container">
          <div className="copyright">
            <p>Copyright © 2020 Noah Jung. All rights reserved.</p>
          </div>
          <div className="links">
            <a href="mailto:noahsjung@gmail.com">email</a>
            <a className="resume" href={resume} target="blank">
              resume
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/noahsjung/"
              target="blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
