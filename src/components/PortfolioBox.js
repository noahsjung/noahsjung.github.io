import React from 'react';

function PortfolioBox(props) {
  return (
    <div className="portfolio-box">
      <a href={props.url}>
        <img className="image" src={props.image} alt={props.title + ' logo'} />
        <div className="text">
          <h3 className="title">{props.title}</h3>
          <h5 className="description">{props.description}</h5>
        </div>
      </a>
    </div>
  );
}

export default PortfolioBox;
