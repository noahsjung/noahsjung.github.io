import React from 'react';
import { LiquidDistortionText } from 'react-text-fun';

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
        <h4 className="work-word">
          <LiquidDistortionText
            id="work-word"
            text="WORK"
            fontFamily="Roboto"
            fontSize={24}
            fill="#c4b2b6"
            speed={0.7}
            volatility={0.04}
          />
          {/* Work */}
        </h4>
        <div className="works">{WorkItems}</div>
      </div>
    );
  }
}

export default Work;
