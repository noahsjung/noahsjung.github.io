import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WorkBox(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className={hovered ? 'work-box-hovered' : 'work-box'}>
      <Link to={props.path}>
        <img
          className="image"
          src={props.image}
          alt={props.title + ' logo'}
          onMouseOver={toggleHover}
          onMouseLeave={toggleHover}
        />
        <div className="text">
          <h3
            className="title"
            onMouseOver={toggleHover}
            onMouseLeave={toggleHover}
          >
            {props.title}
          </h3>
          <h6
            className="description"
            onMouseOver={toggleHover}
            onMouseLeave={toggleHover}
          >
            {props.description}
          </h6>
        </div>
      </Link>
    </div>
  );
}

export default WorkBox;
