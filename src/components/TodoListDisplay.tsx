import { DB_TODO, TsetStateFn } from '../utils/types';
import { MdDone } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import ListItem from '../components/ListItem';
import Button from './styled/Button';
import {Flex} from './styled/Flex';

type Props = {
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
    <Flex gap={'4px'} justify={'flex-start'} align={'flex-start'} direction={'column'}>
      {data.length === 0 ? (
        <p>empty list</p>
      ) : (
        data.map((e: DB_TODO[0], i: number) => (
          <Flex gap={'4px'} justify={'flex-start'} align={'center'} direction={'row'} key={i}>
            <ul><ListItem {...e}/></ul>

            <Flex gap={'4px'} justify={'flex-start'} align={'center'} direction={'column'}>
              <Button id={e.id} onClick={handleDone} disabled={e.status} 
                title={!e.status ? "finish task" : "already done"}
                style={{cursor: !e.status ? 'pointer' : 'default'}}>
                <span><MdDone/></span>
              </Button>

              <Button className={"bt"} id={e.id} onClick={handleDelete} title={"delete task"}>
                <span><AiOutlineClose/></span>
              </Button>
            </Flex>
          </Flex>
        ))
      )}
    </Flex>
  );
};

export default TodoListDisplay;

