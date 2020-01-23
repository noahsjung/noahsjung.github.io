import React from 'react';
import PortfolioBox from './PortfolioBox';
import portfolioData from '../Data/PortfolioData';

class Portfolio extends React.Component {
  state = {
    portfolioData
  };

  render() {
    const portofolioItems = this.state.portfolioData.map(item => (
      <PortfolioBox
        key={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        url={item.url}
      />
    ));

    return (
      <div className="work" id="work">
        <div className="container">
          <div className="work-word">
            <h2>Work</h2>
          </div>
          <div className="work-section">{portofolioItems}</div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
