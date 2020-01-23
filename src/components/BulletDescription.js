import React from 'react';

function BulletDescription(props) {
  let combined = props.descriptions.map(description => <li>{description}</li>);
  return (
    <div className="description">
      <ul>{combined}</ul>
    </div>
  );
}

export default BulletDescription;
