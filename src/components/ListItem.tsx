import styled from 'styled-components';
import { TypeTheme } from '../utils/themes'
import { formatDate } from '../utils/date';
import { DB_TODO } from '../utils/types';

type StyledListItemProps = {
  theme: TypeTheme;
  isDone: boolean;
};

const StyledListItem = styled.ul<StyledListItemProps>`
  list-style: none;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.foreground};
  border-radius: 5px;
  margin-bottom: 10px;

  li {
    margin-bottom: 5px;
  }

  li:nth-child(1) {
    font-size: 10px;
    &:after { content: ')'; }
    &:before { content: '('; }
  }

  li:nth-child(3) {
    color: ${(props) => (props.isDone ? props.theme.green : props.theme.red)} !important;
  }

  li:last-child {
    color: ${props => props.theme.comment} !important;
    font-size: 0.9em;
  }
`;

type ListItemProps = DB_TODO[0] & { theme: TypeTheme };

const ListItem = (props: ListItemProps) => {
  const {id, name, description, addedDate, status, theme} = {...props};
  return (
    <StyledListItem theme={theme} isDone={status}>
      <li>{id}</li>
      <li>{name} ({formatDate(addedDate)})</li>
      <li>{status ? 'done' : 'todo'}</li>
      <li>{description}</li>
    </StyledListItem>
  );
};

export default ListItem;