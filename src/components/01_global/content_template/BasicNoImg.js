import React from 'react';

function BasicNoImg(props) {
  return (
    <div>
      <h6 className="content-heading">{props.heading}</h6>
      <h1 className="content-subheading">{props.subheading}</h1>
      <h4 className="content-description">{props.content}</h4>
    </div>
  );
}

export default BasicNoImg;
