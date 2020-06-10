import React from 'react';

//style
import {
  OrderedList,
  List
} from '../../../styles/02_tools/styled_component/components/Fonts';

function BulletDescription(props) {
  let combined = props.descriptions.map(description => (
    <List style={{ color: '#888' }}>{description}</List>
  ));
  return (
    <div className="description">
      <OrderedList>{combined}</OrderedList>
    </div>
  );
}

export default BulletDescription;
