import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function RightFixed() {
  return (
    <div className="right-container">
      <div className="design-develop">
        <h4>
          Designed and developed by <Link to="/AboutMore">Noah Jung</Link>.
        </h4>
      </div>
      <div className="back-to-top">
        <h4>
          <i className="fas fa-arrow-left"></i>
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            // onSetActive={this.handleSetActive}
          >
            Back to top.
          </LinkScroll>
        </h4>
      </div>
    </div>
  );
}

export default RightFixed;
