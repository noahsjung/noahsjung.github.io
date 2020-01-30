import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function RightFixed() {
  return (
    <div className="right-container">
      <div className="design-develop">
        <h6 className="contribution">
          Designed and developed by <Link to="/about-me">Noah Jung</Link>.
        </h6>
      </div>
      <div className="back-to-top">
        <h6 className="to-top">
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
        </h6>
      </div>
    </div>
  );
}

export default RightFixed;
