import React from 'react';

import WorkBox from './WorkBox';
import PortfolioData from '../../../Data/PortfolioData';

class Work extends React.Component {
  state = {
    PortfolioData
  };

  render() {
    const WorkItems = this.state.PortfolioData.map(item => (
      <WorkBox
        key={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        path={item.path}
      />
    ));

    return (
      <div className="work" id="work">
        <div className="container">
          <h3 className="work-word">Work</h3>
          <div className="content">{WorkItems}</div>
        </div>
      </div>
    );
  }
}

export default Work;
