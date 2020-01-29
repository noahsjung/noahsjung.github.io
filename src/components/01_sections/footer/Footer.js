import React from 'react';
import resume from '../../../files/resume 01.18.20.pdf';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="copyright">
          Copyright © 2020 Noah Jung. <br />
          All rights reserved.
        </p>

        <div className="links">
          <a href="mailto:noahsjung@gmail.com">
            <p>Email</p>
          </a>
          <a href={resume} target="blank">
            <p>Resume</p>
          </a>
          <a href="https://www.linkedin.com/in/noahsjung/" target="blank">
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
