import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: ${props => props.theme.color.container};
  margin: 0 auto;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: $column-gap;
  justify-content: space-around;
  text-align: start;
`;

function Footer(props) {
  return <FooterContainer {...props}>{props.children}</FooterContainer>;
}

export default Footer;
