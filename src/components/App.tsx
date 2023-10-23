import * as th from '../utils/themes';
import Formulario from './Formulario';
import TodoListDisplay from './TodoListDisplay';
import TodoStatusDisplay from './TodoStatusDisplay';
import { Container } from './Container';
import { TODO, DB_TODO } from '../utils/types';
import { useState } from 'react';

function App(){
  const [dynamicData, setDynamicData] = useState<DB_TODO>([]);
  const [done, setDone] = useState<[number, number]>([0,0]);

  const theme: th.Theme = 'dracula';

  const submitedDataHandler = (enteredData: TODO) => {
    const data = {
      ...enteredData,
      id: Math.random().toString()
    }

    setDynamicData((previous: DB_TODO) => [...previous, data]);
  }

  return (
    <Container {...th[theme]}>
      <h1>Lorem Ipsum</h1>
      <Formulario onSubmitData={submitedDataHandler} />
      <TodoStatusDisplay data={dynamicData} n_of_done={done[1]}/>
      <TodoListDisplay 
        theme={th[theme]} data={dynamicData} 
        setNewData={setDynamicData} setDone={setDone}
      />
    </Container>
 )
}

export default App
