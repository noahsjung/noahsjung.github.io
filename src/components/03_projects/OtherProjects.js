import React from 'react';

import WorkBox from '../02_home/home_work/WorkBox';
import PortfolioData from '../../Data/PortfolioData';

class OtherProjects extends React.Component {
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
      <div className="work" id="other-works">
        <h2 className="other-works-word">Other Works</h2>
        <h4 className="work-word">{/* Work */}</h4>
        <div className="works">{WorkItems}</div>
      </div>
    );
  }
}

export default OtherProjects;
