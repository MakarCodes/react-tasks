import React from 'react';
import ViewportSizeContextProvider from './Tasks/Task_3/ViewportSizeContextProvider';
import TaskOne from './Tasks/Task_1/taskOne';
import TaskTwo from './Tasks/Task_2/MultilangComponents';
import TaskThree from './Tasks/Task_3/UseEnv';
import TaskFour from './Tasks/Task_4/PaginationApp';

function App() {
  return (
    <div className='App'>
      <ViewportSizeContextProvider>
        <TaskOne />
        <TaskTwo />
        <TaskThree />
        <TaskFour />
      </ViewportSizeContextProvider>
    </div>
  );
}

export default App;
