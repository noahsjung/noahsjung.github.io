import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function RightFixed() {
  return (
    <div className="right-container">
      <div className="design-develop">
        <p>
          Designed and developed by <Link to="/about-me">Noah Jung</Link>.
        </p>
      </div>
      <div className="back-to-top">
        <p>
          <i className="fas fa-arrow-left"></i>
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Back to top.
          </LinkScroll>
        </p>
      </div>
    </div>
  );
}

export default RightFixed;
