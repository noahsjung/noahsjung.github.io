import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

//styles
import {
  Note,
  StyledLink
} from '../../../styles/02_tools/styled_component/components/Fonts';

class RightFixed extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="right-container">
        <div className="design-develop">
          <Note className="contribution">
            Designed and developed by{' '}
            <StyledLink to="/about-me">Noah Jung</StyledLink>.
          </Note>
        </div>
        <div className="back-to-top">
          <Note className="to-top">
            <i className="fas fa-arrow-left"></i>
            <StyledLink href onClick={this.scrollToTop}>
              Back to top.
            </StyledLink>
          </Note>
        </div>
      </div>
    );
  }
}

export default RightFixed;
