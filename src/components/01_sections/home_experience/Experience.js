import React from 'react';
import ExperienceIndi from './ExperienceIndi';
import experienceData from '../../../Data/ExperienceData';

class Experience extends React.Component {
  state = {
    experienceData
  };

  render() {
    const experiences = this.state.experienceData.map(item => (
      <ExperienceIndi
        key={item.id}
        id={item.id}
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
          <h3 className="experience-word">Experience</h3>
          {experiences}
        </div>
      </div>
    );
  }
}

export default Experience;
