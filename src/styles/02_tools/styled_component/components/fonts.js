import styled from 'styled-components';

const BigHeading = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.75rem;
  font-weight: 500;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const MedHeading = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const SmallHeading = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const SmallTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.45;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const Title = styled.h5`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.45;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const Note = styled.h6`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const SmallParagraph = styled.h7`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.black};
`;
