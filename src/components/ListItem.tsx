import styled from 'styled-components';
import { formatDate } from '../utils/date';
import { DB_TODO } from '../utils/types';

interface StyledListItemProps { isdone: string };

const StyledListItem = styled.ul<StyledListItemProps>`
  list-style: none;
  padding: 10px;
  background-color: ${({theme}) => theme.background};
  border: 1px solid ${({theme}) => theme.foreground};
  border-radius: 5px;
  margin-bottom: 10px;
  width: 250px;
  padding: 8px !important;

  li {
    margin-bottom: 5px;
    word-wrap: break-word;
  }

  li:nth-child(1) {
    font-size: 10px;
    &:after { content: ')'; }
    &:before { content: '('; }
  }

  li:nth-child(3) {
    color: ${({theme,isdone}) => (isdone === "true" 
      ? theme.green 
      : theme.red)} !important;
  }

  li:last-child {
    color: ${({theme}) => theme.comment} !important;
    font-size: 0.9em;
  }
`;

type ListItemProps = DB_TODO[0];

const ListItem = (props: ListItemProps) => {
  const {id, name, description, addedDate, status} = {...props};
  return (
    <StyledListItem isdone={status ? "true" : "false"}>
      <li>{id}</li>
      <li>{name} ({formatDate(addedDate)})</li>
      <li>{status ? 'done' : 'todo'}</li>
      <li>{description}</li>
    </StyledListItem>
  );
};

export default ListItem;
