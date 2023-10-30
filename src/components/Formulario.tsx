import {TEvent, TODOHandlerProps, TFormHandler, TODO, DIFFICULTY, IMPORTANCE} from '../utils/types';
import {useState} from 'react';
import {StyledInput, StyledSelect, StyledTextArea} from './styled/StyledFormInputs';
import {FormField} from './styled/FormField';
import Button from './styled/Button';

const getInitialTodoState = (): TODO => {
  const currentDate = new Date();
  const formattedDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const initialTodoState: TODO = {
    name: '',
    description: '',
    note: '',
    addedDate: formattedDate,
    status: false,
    difficulty: 'EASY',
    importance: 'WEAK',
  };

  return initialTodoState;
};

const INITIAL_STATE: TODO = getInitialTodoState();

type FormularioProps = {
  fn: (enteredData: TODO) => void;
  children: React.ReactNode;
}

const Formulario = (props: FormularioProps) => {
  const [userInput, setUserInput] = useState<TODO>(INITIAL_STATE);

  const inputHandler = (input: TODOHandlerProps<string | number | Date | DIFFICULTY>) => {
    switch (input.key) {
      case 'name':           setUserInput(prev => ({ ...prev, name: input.value } as TODO)); break;
      case 'description':    setUserInput(prev => ({ ...prev, description: input.value } as TODO)); break;
      case 'note':           setUserInput(prev => ({ ...prev, note: input.value } as TODO)); break;
      case 'addedDate':      setUserInput(prev => ({ ...prev, addedDate: input.value } as TODO)); break;
      case 'difficulty':     setUserInput(prev => ({ ...prev, difficulty: input.value as DIFFICULTY } as TODO)); break;
      case 'importance':     setUserInput(prev => ({ ...prev, importance: input.value as IMPORTANCE } as TODO)); break;

      case 'status': break
      default: break;
    }
  }

  const submitHandler = (event: TFormHandler) => {
    event.preventDefault();
    props.fn({...userInput})
    setUserInput({...INITIAL_STATE})
  }

  return (
    <form onSubmit={submitHandler}>
      <FormField gap={'4px'}>
        <StyledInput type="text" value={userInput.name} placeholder={'Name'} title={'name'} required 
          onChange={(e: TEvent) => inputHandler({
            key: 'name',
            value: e.target.value
          })}
        />
      </FormField>

      <FormField gap={'4px'}>
        <StyledInput type="text" value={userInput.note} placeholder={'Aditional Note'} title={'note'} required
          onChange={(e: TEvent) => inputHandler({
            key: 'note',
            value: e.target.value
          })}
        />
      </FormField>

      <FormField gap={'4px'}>
        <StyledSelect value={userInput.difficulty} title={'difficulty'} required
          onChange={(e: TEvent) => inputHandler({
            key: 'difficulty',
            value: e.target.value as DIFFICULTY
          })}
        >
          <option value={'EASY'}>Easy</option>
          <option value={'MEDIUM'}>Medium</option>
          <option value={'HARD'}>Hard</option>
        </StyledSelect>
        <StyledSelect value={userInput.importance} title={'importance'} required 
          onChange={(e: TEvent) => inputHandler({
            key: 'importance',
            value: e.target.value as IMPORTANCE
          })}
        >
          <option value={'LOW'}>Low</option>
          <option value={'MEDIUM'}>Medium</option>
          <option value={'HIGH'}>High</option>
        </StyledSelect>
      </FormField>

      <FormField gap={'4px'}>
        <StyledTextArea value={userInput.description.toString()} title={'description'} placeholder={'Description'} required 
          onChange={(e: TEvent) => inputHandler({
            key: 'description',
            value: e.target.value
          })}
        />
      </FormField>

      <FormField gap={'5px'}>
          <Button type={"submit"}>submit</Button>
          {props.children}
      </FormField>
    </form> 
  )
}

export default Formulario;
