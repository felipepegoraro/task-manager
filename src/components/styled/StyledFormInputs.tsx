import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 250px;
  padding: 5px 10px !important;
  font-size: 16px;
  border: 2px solid ${({theme}) => theme.comment};
  background: #deddff;
  color: #010023;
  border-radius: 5px;
`;

export const StyledSelect = styled.select`
  width: 135px;
  padding: 5px 10px !important;
  font-size: 16px;
  border: 2px solid ${({theme}) => theme.comment};
  background: #deddff;
  color: #010023;
  border-radius: 5px;
`

export const StyledTextArea = styled.textarea`
  width: 250px;
  min-height: 100px !important;
  padding: 10px 10px !important;
  font-size: 16px;
  border: 2px solid ${({theme}) => theme.comment};
  background: #deddff;
  color: #010023;
  border-radius: 5px;
`
