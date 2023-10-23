import * as th from '../utils/themes';
import Formulario from './Formulario';
import TodoListDisplay from './TodoListDisplay';
import TodoStatusDisplay from './TodoStatusDisplay';
import { TODO, DB_TODO } from '../utils/types';
import { useState } from 'react';
import GlobalStyles from '../utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';

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
    <ThemeProvider theme={th[theme]}>
      <>
      <GlobalStyles/>
      <h1>Lorem Ipsum</h1>
      <Formulario onSubmitData={submitedDataHandler} />
      <TodoStatusDisplay data={dynamicData} n_of_done={done[1]}/>
      <TodoListDisplay data={dynamicData} setNewData={setDynamicData} setDone={setDone}/>
      </>
    </ThemeProvider>
 )
}

export default App
