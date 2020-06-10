import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.primary};
`;

export default StyledLink;
