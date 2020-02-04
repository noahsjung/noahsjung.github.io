import React from 'react';

import WorkBox from './WorkBox';
import MoreWorkData from '../../../Data/MoreWorkData';

class MoreWork extends React.Component {
  state = {
    MoreWorkData
  };

  render() {
    const MoreWorkItems = this.state.MoreWorkData.map(item => (
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
        <div className="works">{MoreWorkItems}</div>
      </div>
    );
  }
}

export default MoreWork;
