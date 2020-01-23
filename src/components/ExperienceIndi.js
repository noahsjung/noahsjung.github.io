import React from 'react';
import BulletDescription from './BulletDescription';

const ExperienceIndi = props => {
  return (
    <div className="experience-indi">
      <div className="left">
        <div className="left-container">
          <img
            className="logo"
            src={props.logo}
            alt={props.company + ' logo'}
          />
          <div className="left-content">
            <h2 className="company">{props.company}</h2>
            <h5 className="location"> {props.location}</h5>
            <h5 className="date"> {props.date}</h5>
          </div>
        </div>
      </div>
      <div className="right">
        <h3 className="title">{props.role}</h3>
        <BulletDescription descriptions={props.descriptions} />
      </div>
    </div>
  );
};

export default ExperienceIndi;
