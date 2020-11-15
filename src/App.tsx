import React from 'react';
import TaskOne from './Tasks/Task_1/taskOne';
import TaskTwo from './Tasks/Task_2/MultilangComponents';
import TaskThree from './Tasks/Task_3/UseEnv';
import ViewportSizeContextProvider from './Tasks/Task_3/ViewportSizeContextProvider';

function App() {
  return (
    <div className='App'>
      <ViewportSizeContextProvider>
        <TaskOne />
        <TaskTwo />
        <TaskThree />
      </ViewportSizeContextProvider>
    </div>
  );
}

export default App;
