import React from 'react';

function Basic(props) {
  return (
    <div>
      <h2 className="content-heading">{props.heading}</h2>
      <h2 className="content-subheading">{props.subheading}</h2>
      <img
        className="content-image"
        src={props.image}
        alt={props.heading}
      ></img>
      <p className="content-description">{props.content}</p>
    </div>
  );
}

export default Basic;
