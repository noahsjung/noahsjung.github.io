import React from 'react';

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
      <div className="content">
        <div className="left">
          <h2>{this.props.year}&nbsp;&nbsp;</h2>
          <h4>{this.props.months}</h4>
        </div>

        <div
          className="right"
          width="100px"
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
            <h2 className="title">{this.props.role}</h2>
            <h3 className="company"> &nbsp;@ {this.props.company}</h3>
          </div>
          {this.state.expanded && (
            <BulletDescription descriptions={this.props.descriptions} />
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceIndi;
