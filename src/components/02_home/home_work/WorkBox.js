import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import {
  SmallHeader,
  Note
} from '../../../styles/02_tools/styled_component/components/Fonts';
import WorkBoxContainer from '../../../styles/02_tools/styled_component/components/WorkBox';

function WorkBox(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    // <div className={hovered ? 'work-box-hovered work-box' : 'work-box'}>
    <WorkBoxContainer>
      <Link to={props.path}>
        <img
          className="image"
          src={props.image}
          alt={props.title + ' logo'}
          onMouseOver={toggleHover}
          onMouseLeave={toggleHover}
        />
        <div className="text">
          <SmallHeader
            grayhem
            className="title"
            onMouseOver={toggleHover}
            onMouseLeave={toggleHover}
          >
            {props.title}
          </SmallHeader>
          <Note
            graysem
            className="description"
            onMouseOver={toggleHover}
            onMouseLeave={toggleHover}
          >
            {props.description}
          </Note>
        </div>
      </Link>
    </WorkBoxContainer>
  );
}

export default WorkBox;
