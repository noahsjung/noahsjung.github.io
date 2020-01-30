import React from 'react';

function BulletDescription(props) {
  let combined = props.descriptions.map(description => (
    <li>
      <span>
        <h4>{description}</h4>
      </span>
    </li>
  ));
  return (
    <div className="description">
      <ol>{combined}</ol>
    </div>
  );
}

export default BulletDescription;
