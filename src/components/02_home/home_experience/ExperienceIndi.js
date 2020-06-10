import React from 'react';

//style
import {
  SmallHeader,
  SmallTitle,
  Paragraph
} from '../../../styles/02_tools/styled_component/components/Fonts';
import RightContainer from '../../../styles/02_tools/styled_component/components/ExperienceRightContainer';

import BulletDescription from './BulletDescription';

class ExperienceIndi extends React.Component {
  state = {
    expanded: false
  };

  handleClicked = function(clickEvent, thisObj) {
    this.setState(preState => ({
      expanded: !preState.expanded
    }));
  };

  render() {
    return (
      <div className="experiences">
        <div className="left">
          <SmallHeader className="year">
            {this.props.year}&nbsp;&nbsp;
          </SmallHeader>
          <Paragraph className="months">{this.props.months}</Paragraph>
        </div>

        <RightContainer
          className="right"
          id={this.props.id}
          onClick={clickEvent => this.handleClicked(clickEvent, this)}
        >
          <img
            className="logo"
            src={this.props.logo}
            alt={this.props.company + 'logo'}
            width="150px"
            height="150px"
          />
          <div className="text">
            <SmallHeader className="title">{this.props.role}</SmallHeader>
            <SmallTitle className="company">
              &nbsp;@ {this.props.company}
            </SmallTitle>
          </div>
          {this.state.expanded && (
            <BulletDescription descriptions={this.props.descriptions} />
          )}
        </RightContainer>
      </div>
    );
  }
}

export default ExperienceIndi;
