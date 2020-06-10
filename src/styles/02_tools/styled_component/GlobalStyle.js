import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* roboto */
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
/* roboto mono */
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap');
/* Playfair Display */
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600&display=swap');
 
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html,
body {
  background-color: ${props => props.theme.color.background};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
}
`;

export default GlobalStyle;
