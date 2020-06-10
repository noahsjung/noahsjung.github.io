import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: ${props => props.theme.color.background};
`;

function HomeContainerStyle(props) {
  return <HomeContainer>{props.children}</HomeContainer>;
}

export default HomeContainerStyle;
