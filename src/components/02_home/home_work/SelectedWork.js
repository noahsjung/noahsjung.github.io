import React from 'react';

import { LiquidDistortionText } from 'react-text-fun';

import WorkBox from './WorkBox';
import SelectedWorkData from '../../../Data/SelectedWorkData';

class SelectedWork extends React.Component {
  state = {
    SelectedWorkData
  };

  render() {
    const WorkItems = this.state.SelectedWorkData.map(item => (
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
        {/* <h4>Featured</h4> */}
        <div className="works">{WorkItems}</div>
      </div>
    );
  }
}

export default SelectedWork;
