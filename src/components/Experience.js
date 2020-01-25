import React from 'react';
import ExperienceIndi from './ExperienceIndi';
import experienceData from '../Data/ExperienceData';

class Experience extends React.Component {
  state = {
    experienceData
  };

  render() {
    const experiences = this.state.experienceData.map(item => (
      <ExperienceIndi
        key={item.id}
        year={item.year}
        months={item.months}
        company={item.company}
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

          <div className="content">{experiences}</div>
        </div>
      </div>
    );
  }
}

export default Experience;
