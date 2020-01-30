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
          <h2
            className="title"
            onMouseOver={toggleHover}
            onMouseLeave={toggleHover}
          >
            {props.title}
          </h2>
          <p
            className="description"
            onMouseOver={toggleHover}
            onMouseLeave={toggleHover}
          >
            {props.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default WorkBox;
