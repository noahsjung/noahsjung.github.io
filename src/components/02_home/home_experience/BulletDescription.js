import React from 'react';

function BulletDescription(props) {
  let combined = props.descriptions.map(description => <li>{description}</li>);
  return (
    <div className="description">
      <ol>{combined}</ol>
    </div>
  );
}

export default BulletDescription;
