import * as th from '../utils/themes';
import Formulario from './Formulario';
import TodoListDisplay from './TodoListDisplay';
import TodoStatusDisplay from './TodoStatusDisplay';
import { TODO, DB_TODO } from '../utils/types';
import { useState } from 'react';
import GlobalStyles from '../utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import {Flex} from './styled/Flex';
import { handleSerializeClick, handleDeserializeData } from '../utils/serialize';
import Button from './styled/Button';

function App(){
  const [dynamicData, setDynamicData] = useState<DB_TODO>([]);
  const [done, setDone] = useState<[number, number]>([0,0]);

  const theme: th.Theme = 'github_light';

  const submitedDataHandler = (enteredData: TODO) => {
    const data = {
      ...enteredData,
      id: Math.random().toString()
    }

    setDynamicData((previous: DB_TODO) => [...previous, data]);
  }

  return (
    <ThemeProvider theme={th[theme]}>
      <GlobalStyles/>
      <h1>Task Manager</h1>
      <div className={"app"}>

        <Flex direction={"column"} gap={'4px'} align={'center'} justify={'center'}>
          <h2>Add new task</h2>
          <Formulario fn={submitedDataHandler}>
            <Button title={"import data from JSON file"} onClick={() => handleDeserializeData(setDynamicData)}>
              import
            </Button>
            <Button title={"export data to JSON file"} onClick={()=> handleSerializeClick(dynamicData)}>
              export
            </Button> 
          </Formulario>

        </Flex>

        <Flex direction={'column'} gap={'4px'} align={'flex-start'} justify={'flex-start'}>
          <TodoStatusDisplay data={dynamicData} n_of_done={done[1]}/>
          <TodoListDisplay data={dynamicData} setNewData={setDynamicData} setDone={setDone}/>
        </Flex>

      </div>
    </ThemeProvider>
 )
}

export default App
