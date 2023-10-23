import styled from 'styled-components';
import * as th from '../utils/themes';

export const Container = styled.div<th.TypeTheme>`
  background: ${props => props.background};
  color: ${props => props.foreground};

  h1 { color: ${props => props.blue}; }
  h2 { color: ${props => props.green}; }
  &:is(p,span,details,a){
    color: ${props => props.foreground}; }
  }

  a {
    text-decoration: underline;
  }

  button {
    background-color: ${props => props.foreground}; 
    color: ${props => props.comment}; 
    border: 1px solid ${props => props.background}; 
    padding: 8px 13px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    cursor: pointer; 
    border-radius: 11px; 
    transition: background-color 0.3s ease
    height: auto;
    width: auto;
  }

  button:hover {
    background: ${props => props.currentLine};
    color: ${props => props.foreground};
    border: 1px solid ${props => props.foreground}
  }

  button:active {
    transform: scale(0.95);
  }
`
