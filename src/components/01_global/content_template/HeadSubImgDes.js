import React from 'react';

function HeadSubImgDes(props) {
  return (
    <div>
      <h1 className="content-heading">{props.heading}</h1>
      <h2 className="content-subheading">{props.subheading}</h2>
      <img
        className="content-image"
        src={props.image}
        alt={props.heading}
      ></img>
      <h3 className="content-description">{props.content}</h3>
    </div>
  );
}

export default HeadSubImgDes;
