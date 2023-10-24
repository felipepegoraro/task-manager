import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px !important;
    margin: 0px !important;
  }

  html, body {
    width: max(100vh, fit-content);
    height: max(100vh, fit-content);
    background: ${({theme}) => theme.background};
  }

  body {
    padding: 20px 20px !important;
  }

  .app {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    & > div {
      min-width: 320px;
    }
  }

  @media screen and (max-width: 750px){
    .app {
      flex-direction: column;
      align-items: center;
    }
  }

  div {
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.foreground};
  }

  span {
    color: ${({theme}) => theme.comment} !important;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 { color: ${({theme}) => theme.blue}; }
  h2 { color: ${({theme}) => theme.green}; }
  &:is(p,span,details,a){
    color: ${({theme}) => theme.foreground}; }
  }

  a {
    text-decoration: underline;
  }
`

export default GlobalStyles;
