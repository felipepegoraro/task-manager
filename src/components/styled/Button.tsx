import styled from 'styled-components';

const Button = styled.button`
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

  &:hover {
    background: ${({theme}) => theme.currentLine} !important;
    color: ${({theme}) => theme.foreground};
    border: 1px solid ${({theme}) => theme.foreground}
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Button;
