import styled from 'styled-components';

const Button = styled.a`
  color: ${props => props.theme.color.primary};
  text-decoration: none;
  border: 1px ${props => props.theme.color.primary} solid;
  border-radius: 999em;

  padding: 10px 18px;
  margin: 5px 10px 5px 0px;
  &:hover {
    background: none;
    color: ${props => props.theme.color.background};
    background-color: ${props => props.theme.color.primary};
  }
  i {
    margin-right: 10px;
  }
`;

export default Button;
