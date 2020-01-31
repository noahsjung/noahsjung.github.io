import React from 'react';
import { LiquidDistortionText } from 'react-text-fun';

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
        <h4 className="experience-word">
          <LiquidDistortionText
            id="experience-word"
            text="EXPERIENCE"
            fontFamily="Roboto"
            fontSize={24}
            fill="#c4b2b6"
            speed={0.7}
            volatility={0.04}
          />
          {/* Experience */}
        </h4>
        {experiences}
      </div>
    );
  }
}

export default Experience;
