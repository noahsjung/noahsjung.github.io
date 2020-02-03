import React from 'react';
import resume from '../../files/resume_01.29.20.pdf';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h6 className="copyright">
          Copyright © 2020 Noah Jung. <br />
          All rights reserved.
        </h6>
        <div className="links">
          <a href="mailto:noahsjung@gmail.com">
            <h6 className="email">Email</h6>
          </a>
          <a href={resume} target="blank">
            <h6 className="resume">Resume</h6>
          </a>
          <a href="https://www.linkedin.com/in/noahsjung/" target="blank">
            <h6 className="linkedin">LinkedIn</h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
