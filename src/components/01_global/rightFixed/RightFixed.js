import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

class RightFixed extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
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
            <a href onClick={this.scrollToTop}>
              Back to top.
            </a>
          </h6>
        </div>
      </div>
    );
  }
}

export default RightFixed;
