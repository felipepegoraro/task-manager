import { DB_TODO, TsetStateFn } from '../utils/types';
import { MdDone } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { TypeTheme } from '../utils/themes';
import ListItem from '../components/ListItem';

type Props = {
  theme: TypeTheme;
  data: DB_TODO;
  setNewData: TsetStateFn<DB_TODO>;
  setDone: TsetStateFn<[number, number]>;
};

const TodoListDisplay = (props: Props) => {
  const {data, setNewData, setDone} = {...props};

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const current = e.currentTarget.id;
    setNewData(data.filter(e => e.id != current))
  }

  const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
    const current = e.currentTarget.id;
    setNewData(prev => prev.map(item => (item.id === current ? { ...item, status: true } : item)));
    
    setDone((prev: [number, number]) => {
      const todo = prev[0] === 0 ? 0 : prev[0]-1;
      return [todo, prev[1]+1];
    });
  };

  return (
    <div>
      {data.length === 0 ? (
        <p>empty list</p>
      ) : (
        data.map((e: DB_TODO[0], i: number) => (
          <div style={{display: 'flex', gap: '5px'}} key={i}>
            <ul><ListItem theme={props.theme} {...e}/></ul>

            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexDirection: 'row'}}>
              <button id={e.id} onClick={handleDone} disabled={e.status}>
                <span><MdDone/></span>
              </button>

              <button id={e.id} onClick={handleDelete}>
                <span><AiOutlineClose/></span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoListDisplay;

