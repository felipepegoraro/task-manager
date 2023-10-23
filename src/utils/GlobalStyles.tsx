import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px !important;
    margin: 0px !important;
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

  button {
    background-color: ${({theme}) => theme.foreground} !important; 
    color: ${({theme}) => theme.comment} !important; 
    border: 1px solid ${({theme}) => theme.background} !important; 
    padding: 8px 13px !important; 
    text-align: center !important; 
    text-decoration: none !important; 
    display: inline-block !important; 
    font-size: 16px !important; 
    cursor: pointer; 
    border-radius: 11px; 
    transition: background-color 0.3s ease
    height: auto;
    width: auto;
  }

  button:hover {
    background: ${({theme}) => theme.currentLine} !important;
    color: ${({theme}) => theme.foreground};
    border: 1px solid ${({theme}) => theme.foreground}
  }

  button:active {
    transform: scale(0.95);
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
