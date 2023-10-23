import {TEvent, TODOHandlerProps, TFormProps, TFormHandler, TODO, DIFFICULTY, IMPORTANCE} from '../utils/types';
import {useState} from 'react';

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

const Formulario = (props: TFormProps) => {
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
    props.onSubmitData({...userInput})
    setUserInput({...INITIAL_STATE})
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
          <label>Name</label>
          <input type="text" value={userInput.name} required 
              onChange={(e: TEvent) => inputHandler({
                  key: 'name',
                  value: e.target.value
              })}
          />
      </div>
      <div>
          <label>Description</label>
          <textarea value={userInput.description.toString()} required 
              onChange={(e: TEvent) => inputHandler({
                  key: 'description',
                  value: e.target.value
              })}
          />
      </div>
      <div>
          <label>Note</label>
          <input type="text" value={userInput.note}  required
              onChange={(e: TEvent) => inputHandler({
                  key: 'note',
                  value: e.target.value
              })}
          />
      </div>

      <div>
          <label>Difficulty</label>
          <select value={userInput.difficulty} required
              onChange={(e: TEvent) => inputHandler({
                  key: 'difficulty',
                  value: e.target.value as DIFFICULTY
              })}
          >
              <option value={'EASY'}>Easy</option>
              <option value={'MEDIUM'}>Medium</option>
              <option value={'HARD'}>Hard</option>
          </select>
      </div>

      <div>
          <label>Importance</label>
          <select value={userInput.importance} required 
              onChange={(e: TEvent) => inputHandler({
                  key: 'importance',
                  value: e.target.value as IMPORTANCE
              })}
          >
              <option value={'LOW'}>Low</option>
              <option value={'MEDIUM'}>Medium</option>
              <option value={'HIGH'}>High</option>
          </select>
      </div>

      <div>
        <button type={"submit"}>submit</button>
      </div>
    </form> 
  )
}

export default Formulario;
