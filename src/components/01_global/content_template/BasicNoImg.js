import React from 'react';

function BasicNoImg(props) {
  return (
    <>
      {props.heading && <h1 className="heading">{props.heading}</h1>}
      {props.subheading && <h2 className="sub-heading">{props.subheading}</h2>}
      {props.description && <p className="description">{props.description}</p>}
    </>
  );
}

export default BasicNoImg;
