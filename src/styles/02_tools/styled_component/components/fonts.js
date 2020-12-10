import styled from 'styled-components';

export const BigHeader = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.75rem;
  font-weight: 500;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: ${props => props.theme.color.grayhem};
`;

export const MedHeader = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.color.graymem};
`;

export const SmallHeader = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: ${props =>
    props.grayhem ? props.theme.color.grayhem : props.theme.color.graymem};
`;

export const SmallTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.45;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props =>
    props.Landing ? props.theme.color.graysem : props.theme.color.graymem};
`;

export const Title = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.45;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.color.graymem};
`;

export const Note = styled.h6`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props =>
    props.graysem ? props.theme.color.graysem : props.theme.color.graymem};
`;

export const SmallParagraph = styled.h6`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.color.graymem};
`;

export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.color.graymem};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.primary};
  cursor: pointer;
`;

export const OrderedList = styled.ol`
  font-family: 'Roboto', sans-serif;
  list-style: none;
  display: block;
  counter-reset: list-numbering 0;
`;

export const List = styled.li`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.color.graymem};
  text-indent: -15px;
  margin-bottom: 1rem;
  margin-left: 45px;
  counter-increment: list-numbering;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.5;
  ::before {
    font-family: 'Roboto', sans-serif;
    content: counter(list-numbering, decimal-leading-zero) '. ';
    margin-left: -1.65em;
    margin-right: 15px;
  }
`;
