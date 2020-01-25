import React from 'react';

// import BulletDescription from './BulletDescription';
import circle from '../images/circle.png';
import line from '../images/timeline.png';

const ExperienceIndi = props => {
  return (
    <div className="left-right">
      <div className="left-container">
        <div className="dates">
          <h2>{props.year}&nbsp;&nbsp;</h2>
          <h4>{props.months}</h4>
        </div>

        {/* <img
          className="circle"
          src={circle}
          alt="timeline"
          height="20px"
          width="20px"
        />
        <hr className="line" /> */}
      </div>
      {/* <img src={line} alt="timeline" /> */}

      <div className="right-container">
        <div className="right">
          <img
            className="logo"
            src={props.logo}
            alt={props.company + 'logo'}
            width="150px"
            height="150px"
          />
          <div className="content">
            <h2 className="title">{props.role}</h2>
            <h3 className="company"> &nbsp;@ {props.company}</h3>
            {/* <BulletDescription descriptions={props.descriptions} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceIndi;
