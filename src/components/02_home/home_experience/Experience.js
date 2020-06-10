import React from 'react';
import { LiquidDistortionText } from 'react-text-fun';

//styles
import { SmallTitle } from '../../../styles/02_tools/styled_component/components/Fonts';

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
        <SmallTitle className="experience-word">
          <LiquidDistortionText
            id="experience-word"
            text="EXPERIENCE"
            fontFamily="Roboto"
            fontSize={24}
            fill="#c4b2b6"
            speed={0.7}
            volatility={0.04}
          />
        </SmallTitle>
        {experiences}
      </div>
    );
  }
}

export default Experience;
