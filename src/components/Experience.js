import React from 'react';
import ExperienceIndi from './ExperienceIndi';
import experienceData from '../Data/ExperienceData';

class Experience extends React.Component {
  state = {
    experienceData
  };

  render() {
    const experienceItems = this.state.experienceData.map(item => (
      <ExperienceIndi
        key={item.id}
        company={item.company}
        date={item.date}
        location={item.location}
        role={item.role}
        descriptions={item.descriptions}
        logo={item.logo}
      />
    ));

    return (
      <div className="experience" id="experience">
        <div className="container">
          <div className="experience-word">
            <h2>Experience</h2>
          </div>
          <div className="experience-content">{experienceItems}</div>
        </div>
      </div>
    );
  }
}

export default Experience;
