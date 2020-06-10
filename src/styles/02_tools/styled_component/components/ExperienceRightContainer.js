import React from 'react';
import styled from 'styled-components';

const ExperinceContainer = styled.div`
  background-color: ${props => props.theme.color.container};
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 1px 2px 5px 3px ${props => props.theme.shadowColor.default};
  z-index: 1;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 7px 5px ${props => props.theme.shadowColor.hovered};
  }
`;

function ExperienceRightContainer(props) {
  return <ExperinceContainer {...props}>{props.children}</ExperinceContainer>;
}

export default ExperienceRightContainer;
