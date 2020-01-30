import React from 'react';

function Basic(props) {
  return (
    <div>
      <h6 className="content-heading">{props.heading}</h6>
      <h1 className="content-subheading">{props.subheading}</h1>
      <img
        className="content-image"
        src={props.image}
        alt={props.heading}
      ></img>
      <h4 className="content-description">{props.content}</h4>
    </div>
  );
}

export default Basic;
